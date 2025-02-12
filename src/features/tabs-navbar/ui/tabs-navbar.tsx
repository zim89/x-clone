import Link from 'next/link'
import { cn } from '@/shared/lib'
import { tabsNavbarLinks } from '../model'

export const TabsNavbar = () => {
  return (
    <ul className='flex justify-between border-b border-border px-4 pt-4'>
      {tabsNavbarLinks.map(link => {
        const isActive = link.label === 'For you'

        return (
          <li key={link.label}>
            <Link
              className={cn(
                'flex items-center pb-3 font-bold text-muted-foreground transition-colors duration-300 hover:text-accent',
                isActive &&
                  'border-b-4 border-accent text-foreground hover:text-foreground',
              )}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
