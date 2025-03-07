import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs'
import { Navbar } from '@/features/navbar'
import { PostLink } from '@/features/post'
import { UserMenu } from '@/features/user'
import { Logo } from '@/shared/ui'

export const AsideLeft = () => {
  return (
    <div className='sticky top-0 grid h-screen grid-rows-[1fr_auto] px-3 py-3'>
      <div className='space-y-3'>
        <div>
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <Logo />
        <Navbar />
        <PostLink />
      </div>

      <UserMenu />
    </div>
  )
}
