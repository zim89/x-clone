import Link from 'next/link'
import { AppImage } from '@/shared/ui'

export const Recommendations = () => {
  return (
    <div className='space-y-4 rounded-2xl border border-border p-4'>
      <ul className='space-y-3'>
        {Array.from({ length: 3 }).map((_, i) => (
          <li key={i} className='flex items-center justify-between'>
            {/* IMAGE AND USER INFO */}
            <div className='flex items-center gap-2'>
              <div className='relative h-10 w-10 overflow-hidden rounded-full'>
                <AppImage
                  path='general/avatar.png'
                  alt='John Doe'
                  w={100}
                  h={100}
                  tr={true}
                />
              </div>
              <div>
                <p className='text-md font-bold'>John Doe</p>
                <p className='text-sm text-muted-foreground'>@johnDoe</p>
              </div>
            </div>
            {/* BUTTON */}
            <button className='rounded-full bg-primary px-4 py-1 font-semibold text-primary-foreground hover:bg-primary/90'>
              Follow
            </button>
          </li>
        ))}
      </ul>
      <Link href='/' className='inline-block text-accent'>
        Show More
      </Link>
    </div>
  )
}
