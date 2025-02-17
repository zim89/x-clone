import Link from 'next/link'
import { notFound } from 'next/navigation'
import { auth, currentUser } from '@clerk/nextjs/server'
import { Feed } from '@/features/post'
import { prisma } from '@/shared/lib'
import { AppImage } from '@/shared/ui'

export default async function UserPage({
  params,
}: {
  params: Promise<{ username: string }>
}) {
  // const { userId } = await auth()
  const userr = await currentUser()
  const userId = userr?.id
  const username = (await params).username

  const user = await prisma.user.findUnique({
    where: { username: username },
    include: {
      _count: { select: { followers: true, followings: true } },
      followings: userId ? { where: { followerId: userId } } : undefined,
    },
  })

  if (!user) return notFound()

  return (
    <div className=''>
      {/* PROFILE TITLE */}
      <div className='sticky top-0 z-10 flex items-center gap-8 bg-[#00000084] p-4 backdrop-blur-md'>
        <Link href='/'>
          <AppImage path='icons/back.svg' alt='back' w={24} h={24} />
        </Link>
        <h1 className='text-lg font-bold'>{user.displayName}</h1>
      </div>
      {/* INFO */}
      <div className=''>
        {/* COVER & AVATAR CONTAINER */}
        <div className='relative w-full'>
          {/* COVER */}
          <div className='relative aspect-[3/1] w-full'>
            <AppImage
              path={user.cover || 'general/noCover.png'}
              alt=''
              w={600}
              h={200}
              tr={true}
            />
          </div>
          {/* AVATAR */}
          <div className='absolute left-4 aspect-square w-1/5 -translate-y-1/2 overflow-hidden rounded-full border-4 border-border bg-primary/10'>
            <AppImage
              path={user.img || 'general/noAvatar.png'}
              alt=''
              w={100}
              h={100}
              tr={true}
            />
          </div>
        </div>
        <div className='flex w-full items-center justify-end gap-2 p-2'>
          <div className='flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-[1px] border-border'>
            <AppImage path='icons/more.svg' alt='more' w={20} h={20} />
          </div>
          <div className='flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-[1px] border-border'>
            <AppImage path='icons/explore.svg' alt='more' w={20} h={20} />
          </div>
          <div className='flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-[1px] border-border'>
            <AppImage path='icons/message.svg' alt='more' w={20} h={20} />
          </div>
          {/* FIXME:  */}
          {/* {userId && (
            <FollowButton
              userId={user.id}
              isFollowed={!!user.followings.length}
              username={username}
            />
          )} */}
        </div>
        {/* USER DETAILS */}
        <div className='flex flex-col gap-2 p-4'>
          {/* USERNAME & HANDLE */}
          <div className=''>
            <h1 className='text-2xl font-bold'>{user.displayName}</h1>
            <span className='text-sm text-muted-foreground'>
              @{user.username}
            </span>
          </div>
          {user.bio && <p>{user.bio}</p>}
          {/* JOB & LOCATION & DATE */}
          <div className='flex gap-4 text-[15px] text-muted-foreground'>
            {user.location && (
              <div className='flex items-center gap-2'>
                <AppImage
                  path='icons/userLocation.svg'
                  alt='location'
                  w={20}
                  h={20}
                />
                <span>{user.location}</span>
              </div>
            )}
            <div className='flex items-center gap-2'>
              <AppImage path='icons/date.svg' alt='date' w={20} h={20} />
              <span>
                Joined{' '}
                {new Date(user.createdAt.toString()).toLocaleDateString(
                  'en-US',
                  { month: 'long', year: 'numeric' },
                )}
              </span>
            </div>
          </div>
          {/* FOLLOWINGS & FOLLOWERS */}
          <div className='flex gap-4'>
            <div className='flex items-center gap-2'>
              <span className='font-bold'>{user._count.followers}</span>
              <span className='text-[15px] text-muted-foreground'>
                Followers
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='font-bold'>{user._count.followings}</span>
              <span className='text-[15px] text-muted-foreground'>
                Followings
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* FEED */}
      <Feed userProfileId={user.id} />
    </div>
  )
}
