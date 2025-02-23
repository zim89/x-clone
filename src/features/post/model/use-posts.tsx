'use client'

import {
  useInfiniteQuery,
  useSuspenseInfiniteQuery,
} from '@tanstack/react-query'
import { postApi } from '@/entities/post'
import { useIntersection } from '@/shared/hooks'

export const usePosts = () => {
  const {
    data: posts,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    ...postApi.getPostsInfinityQueryOptions(),
  })

  const cursorRef = useIntersection(() => {
    fetchNextPage()
  })

  if (isLoading) {
    return { error: null, posts: [], isLoading: true, cursor: null }
  }

  const cursor = (
    <div className='mt-4 flex gap-2' ref={cursorRef}>
      {!hasNextPage && <div>Нет данных для загрузки </div>}
      {isFetchingNextPage && <div>...Loading</div>}
    </div>
  )

  return { error, posts, isLoading, cursor }
}
