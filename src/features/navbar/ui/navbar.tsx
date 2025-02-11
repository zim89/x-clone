import Link from 'next/link'
import { navLinks } from '../model'

export const Navbar = () => {
  return (
    <nav>
      <ul className='space-y-3'>
        {navLinks.map(link => (
          <li key={link.id}>
            <Link
              href={link.href}
              className='flex items-center gap-4 rounded-full bg-background px-4 py-2 text-lg transition-colors duration-300 hover:bg-muted'
            >
              <link.icon />
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
