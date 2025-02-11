import {
  Bell,
  Bookmark,
  BriefcaseBusiness,
  CircleEllipsis,
  Gem,
  Home,
  Mail,
  Search,
  UserRound,
  UsersRound,
  type LucideIcon,
} from 'lucide-react'
import { routes } from '@/shared/constants'

interface NavLink {
  id: number
  label: string
  href: string
  icon: LucideIcon
}
export const navLinks: NavLink[] = [
  {
    id: 1,
    label: 'Homepage',
    href: routes.home,
    icon: Home,
  },
  {
    id: 2,
    label: 'Explore',
    href: '/',
    icon: Search,
  },
  {
    id: 3,
    label: 'Notification',
    href: '/',
    icon: Bell,
  },
  {
    id: 4,
    label: 'Messages',
    href: '/',
    icon: Mail,
  },
  {
    id: 5,
    label: 'Bookmarks',
    href: '/',
    icon: Bookmark,
  },
  {
    id: 6,
    label: 'Jobs',
    href: '/',
    icon: BriefcaseBusiness,
  },
  {
    id: 7,
    label: 'Communities',
    href: '/',
    icon: UsersRound,
  },
  {
    id: 8,
    label: 'Premium',
    href: '/',
    icon: Gem,
  },
  {
    id: 9,
    label: 'Profile',
    href: '/',
    icon: UserRound,
  },
  {
    id: 10,
    label: 'More',
    href: '/',
    icon: CircleEllipsis,
  },
]
