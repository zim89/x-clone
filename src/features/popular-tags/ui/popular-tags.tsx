import Link from 'next/link'
import { EllipsisIcon } from 'lucide-react'
import { AppImage } from '@/shared/ui'

export const PopularTags = () => {
  return (
    <div className='space-y-2 rounded-2xl border border-border p-4'>
      <h2 className='text-xl font-bold'>What&apos;s Happening</h2>

      {/* TREND EVENT */}
      <div className='flex gap-4'>
        <div className='relative size-20 overflow-hidden rounded-xl'>
          <AppImage
            path='general/event.png'
            alt='event'
            w={120}
            h={120}
            tr={true}
          />
        </div>
        <div className='flex-1'>
          <h3 className='line-clamp-1 font-bold'>Nadal v Federer Grand Slam</h3>
          <p className='text-sm text-muted-foreground'>Last Night</p>
        </div>
      </div>

      {/* TOPICS */}
      <div className='space-y-4'>
        <ul className='space-y-3'>
          {Array.from({ length: 4 }).map((_, i) => (
            <li key={i}>
              <p className='flex items-center justify-between text-sm text-muted-foreground'>
                <span>Technology • Trending</span>
                <EllipsisIcon className='size-4 stroke-[1.5]' />
              </p>
              <h3 className='font-bold'>OpenAI</h3>
              <p className='text-sm text-muted-foreground'>20K posts</p>
            </li>
          ))}
        </ul>

        <Link href='/' className='inline-block text-accent'>
          Show More
        </Link>
      </div>
    </div>
  )
}
