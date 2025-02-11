import Link from 'next/link'
import { Search } from '@/features/search'

export const AsideRight = () => {
  return (
    <div className='sticky top-0 h-screen space-y-4 px-3 py-3'>
      <Search />
      {/* <PopularTags /> */}
      {/* <Recommendations /> */}
      <div className='flex flex-wrap gap-x-4 text-sm text-muted-foreground'>
        <Link href='/'>Terms of Service</Link>
        <Link href='/'>Privacy Policy</Link>
        <Link href='/'>Cookie Policy</Link>
        <Link href='/'>Accessibility</Link>
        <Link href='/'>Ads Info</Link>
        <span>© 2025 Zi Corp.</span>
      </div>
    </div>
  )
}
