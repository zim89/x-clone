import { EllipsisIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/common/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui/common/dropdown-menu'

export const UserMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className='group flex w-full cursor-pointer items-center gap-2 rounded-full p-2 hover:bg-muted'
        asChild
      >
        <div className='flex items-center gap-2'>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>ZD</AvatarFallback>
          </Avatar>
          <div className='flex flex-1 items-center justify-between'>
            <div>
              <p className='text-sm font-bold'>Zim Dev</p>
              <p className='text-sm text-muted-foreground'>@zimDev</p>
            </div>
            <EllipsisIcon className='text-muted-foreground group-hover:text-foreground/80' />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
