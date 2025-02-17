'use client'

import { useEffect } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import InfiniteScroll from 'react-infinite-scroll-component'
import { fetchPosts } from './func'
import { Post } from './post'

// const fetchPosts = async (pageParam: number, userProfileId?: string) => {
//   const res = await fetch(
//     'http://localhost:3000/api/posts?cursor=' +
//       pageParam +
//       '&user=' +
//       userProfileId,
//   )
//   return res.json()
// }

export const FeedInfinite = ({ userProfileId }: { userProfileId?: string }) => {
  const { data, error, status, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam = 2 }) => fetchPosts(pageParam, userProfileId),
    initialPageParam: 2,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 2 : undefined,
  })
  useEffect(() => {
    console.log(data)
  }, [data])
  if (error) return 'Something went wrong!'
  if (status === 'pending') return 'Loading...'

  const allPosts = data?.pages?.flatMap(page => page.posts) || []

  return (
    <InfiniteScroll
      dataLength={allPosts.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h1>Posts are loading...</h1>}
      endMessage={<h1>All posts loaded!</h1>}
    >
      {allPosts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </InfiniteScroll>
  )
}
