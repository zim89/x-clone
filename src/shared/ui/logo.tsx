import Link from 'next/link'
import { XTwitterIcon } from '@shared/ui/icons'
import { AppRoutes } from '../config'

export const Logo = () => {
  return (
    <Link
      href={AppRoutes.home}
      className='flex size-12 items-center justify-center rounded-full bg-background text-foreground transition-colors duration-300 hover:bg-muted'
    >
      <XTwitterIcon />
    </Link>
  )
}
