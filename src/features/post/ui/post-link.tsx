import Link from 'next/link'
import { routes } from '@/shared/constants'

export const PostLink = () => {
  return (
    <>
      <Link
        href={routes.createPost}
        className='flex h-12 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground transition-colors duration-300 hover:bg-primary/90'
      >
        Post
      </Link>
    </>
  )
}
