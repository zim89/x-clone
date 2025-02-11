import Link from 'next/link'

import { Comments, Post } from '@/features/feed'
import { postTypes } from '@/shared/constants'
import { AppImage } from '@/shared/ui'

export const PostDetailsPage = () => {
  return (
    <div className=''>
      <div className='sticky top-0 z-10 flex items-center gap-8 bg-[#00000084] p-4 backdrop-blur-md'>
        <Link href='/'>
          <AppImage path='icons/back.svg' alt='back' w={24} h={24} />
        </Link>
        <h1 className='text-lg font-bold'>Post</h1>
      </div>
      <Post type={postTypes.Status} />
      <Comments />
    </div>
  )
}
