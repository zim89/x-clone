import { infiniteQueryOptions, queryOptions } from '@tanstack/react-query'
import { apiClient, ApiRoutes } from '@/shared/api'
import type { PaginatedResponse } from '@/shared/types'
import type { Post } from './post.types'

export const postApi = {
  getPosts: (
    params?: Record<string, string | number>,
    signal?: AbortSignal,
  ) => {
    return apiClient.get<PaginatedResponse<Post>>(
      ApiRoutes.posts,
      params,
      signal,
    )
  },
  getPostsQueryOptions: ({ page }: { page: number }) => {
    return queryOptions({
      queryKey: ['posts', 'list', { page }],
      queryFn: meta => postApi.getPosts({ page }, meta.signal),
    })
  },

  getPostsInfinityQueryOptions: () => {
    return infiniteQueryOptions({
      queryKey: ['posts', 'list'],
      queryFn: meta => postApi.getPosts({ page: meta.pageParam }, meta.signal),
      initialPageParam: 1,
      getNextPageParam: result => result.next,
      select: result => result.pages.flatMap(page => page.data),
    })
  },
} as const
