import { cn } from '../lib'
import { Avatar, AvatarFallback, AvatarImage } from './common/avatar'

export const UserAvatar = ({ className }: { className: string }) => {
  return (
    <Avatar className={cn(className)}>
      <AvatarImage src='https://github.com/shadcn.png' />
      <AvatarFallback>ZD</AvatarFallback>
    </Avatar>
  )
}
