import Link from 'next/link'
import { routes } from '@shared/constants'
import { XTwitterIcon } from '@shared/ui/icons'

export const Logo = () => {
  return (
    <Link
      href={routes.home}
      className='flex size-12 items-center justify-center rounded-full bg-background text-foreground transition-colors duration-300 hover:bg-muted'
    >
      <XTwitterIcon />
    </Link>
  )
}
