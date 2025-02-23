'use client'

import { Suspense } from 'react'
import { usePosts } from '../model'
import { Post } from './post'

export const Feed = () => {
  const { cursor, error, isLoading, posts } = usePosts()

  return (
    <div>
      {posts?.map(post => (
        <div key={post.id}>
          <Post post={post} />
        </div>
      ))}
      {cursor}
    </div>
  )
}
