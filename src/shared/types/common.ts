import type {
  ContentTypeEnum,
  FileTypeEnum,
  HttpHeaderEnum,
  HttpMethodEnum,
  ImageTypeEnum,
  PostTypeEnum,
} from '@/shared/constants'

export type HttpHeaderType =
  (typeof HttpHeaderEnum)[keyof typeof HttpHeaderEnum]
export type ContentType = (typeof ContentTypeEnum)[keyof typeof ContentTypeEnum]
export type HttpMethodType =
  (typeof HttpMethodEnum)[keyof typeof HttpMethodEnum]

export type ImageType = (typeof ImageTypeEnum)[keyof typeof ImageTypeEnum]
export type PostType = (typeof PostTypeEnum)[keyof typeof PostTypeEnum]
export type FileType = (typeof FileTypeEnum)[keyof typeof FileTypeEnum]

export type ImageSettings = {
  type: ImageType
  sensitive: boolean
}

export interface CustomMetadata {
  sensitive: boolean
}

export interface FileDetailsResponse {
  width: number
  height: number
  filePath: string
  url: string
  fileType: string
  customMetadata?: CustomMetadata
}

export interface PaginatedResponse<T> {
  data: T[]
  first: number
  items: number
  last: number
  next: number | null
  pages: number
  prev: number | null
}
