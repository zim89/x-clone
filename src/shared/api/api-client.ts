import {
  AppConfig,
  ContentTypeEnum,
  HttpHeaderEnum,
  HttpMethodEnum,
} from '../constants'

export class ApiError extends Error {
  // Типизация конструктора
  constructor(
    public status: number,
    public message: string,
    public data?: unknown,
  ) {
    super(`ApiError ${status}: ${message}`)
    this.name = 'ApiError'

    // Сохраняем stack trace в случае использования в браузере
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError)
    }
  }
}

interface RequestOptions extends RequestInit {
  json?: unknown
  params?: Record<string, string | number>
  signal?: AbortSignal
}

export class ApiClient {
  private baseURL: string
  private timeout: number
  private controllers: Map<string, AbortController>

  constructor(baseURL: string = AppConfig.baseUrl, timeout: number = 10000) {
    this.baseURL = baseURL
    this.timeout = timeout
    this.controllers = new Map()
  }

  // Метод для отмены запроса
  public abort(requestId: string): void {
    const controller = this.controllers.get(requestId)
    if (controller) {
      controller.abort()
      this.controllers.delete(requestId)
    }
  }

  // Метод для отмены всех активных запросов
  public abortAll(): void {
    this.controllers.forEach((controller, requestId) => {
      controller.abort()
      this.controllers.delete(requestId)
    })
  }

  // Основной метод запроса
  private async request<T>(
    url: string,
    options: RequestOptions = {},
  ): Promise<T> {
    const { json, params, signal, ...fetchOptions } = options
    const requestId = `${options.method || HttpMethodEnum.Get}-${url}-${Date.now()}`
    const controller = new AbortController()

    if (signal) {
      signal.addEventListener('abort', () => controller.abort())
    }

    this.controllers.set(requestId, controller)

    const timeoutId = setTimeout(() => {
      controller.abort()
      this.controllers.delete(requestId)
    }, this.timeout)

    try {
      // Формируем URL с параметрами
      const urlObj = new URL(`${this.baseURL}${url}`)
      if (params) {
        Object.entries(params).forEach(([key, value]) =>
          urlObj.searchParams.append(key, String(value)),
        )
      }

      // Формируем заголовки
      const headers: HeadersInit = {
        [HttpHeaderEnum.ContentType]: ContentTypeEnum.Json,
        ...options.headers,
      }

      // Добавляем тело запроса
      if (json) {
        fetchOptions.body = JSON.stringify(json)
      }

      const response = await fetch(urlObj.toString(), {
        ...fetchOptions,
        headers,
        signal: controller.signal,
      })

      clearTimeout(timeoutId)
      this.controllers.delete(requestId)

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new ApiError(response.status, data?.message || 'API Error', data)
      }

      return data as T
    } catch (error: unknown) {
      clearTimeout(timeoutId)
      this.controllers.delete(requestId)

      // Проверка, является ли error экземпляром ApiError
      if (error instanceof ApiError) {
        throw error
      }

      // Проверка, является ли error объектом Error, чтобы безопасно использовать error.name
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new ApiError(408, 'Request aborted', null)
        }

        // Обработка сетевых ошибок
        if (error instanceof TypeError && error.message === 'Failed to fetch') {
          throw new ApiError(503, 'Network error', error)
        }

        // Если это ошибка типа Error, но не одно из известных значений
        throw new ApiError(500, 'Internal server error', {
          message: error.message,
        })
      }

      // Обработка случаев, когда error не является экземпляром Error или ApiError
      throw new ApiError(500, 'Unknown error', error)
    }
  }

  // Удобные методы для GET, POST, PUT, DELETE
  async get<T>(
    url: string,
    params?: Record<string, string | number>,
    signal?: AbortSignal,
  ): Promise<T> {
    return this.request<T>(url, { method: HttpMethodEnum.Get, params, signal })
  }

  async post<T>(url: string, json?: unknown, signal?: AbortSignal): Promise<T> {
    return this.request<T>(url, { method: HttpMethodEnum.Post, json, signal })
  }

  async put<T>(url: string, json?: unknown, signal?: AbortSignal): Promise<T> {
    return this.request<T>(url, { method: HttpMethodEnum.Put, json, signal })
  }

  async delete<T>(url: string, signal?: AbortSignal): Promise<T> {
    return this.request<T>(url, { method: HttpMethodEnum.Delete, signal })
  }
}

// Пример создания экземпляра
export const apiClient = new ApiClient(AppConfig.baseUrl, 15000)
