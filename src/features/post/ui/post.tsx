import Link from 'next/link'
import { Repeat2 } from 'lucide-react'
import { fileTypes, postTypes } from '@/shared/constants'
import { cn, imagekit } from '@/shared/lib'
import type { FileDetailsResponse, PostType } from '@/shared/types'
import { AppImage, AppVideo, UserAvatar } from '@/shared/ui'
import { PostActions } from './post-actions'

export const Post = async ({ type }: { type?: PostType }) => {
  const getFileDetails = async (fileId: string) => {
    return new Promise((resolve, reject) => {
      imagekit.getFileDetails(fileId, function (error, result) {
        if (error) reject(error)
        else resolve(result as FileDetailsResponse)
      })
    })
  }

  // const fileDetails = await getFileDetails('675d943be375273f6003858f')

  return (
    <div className='border-b border-border p-4'>
      {/* POST TYPE */}
      <div className='mb-2 flex items-center gap-2 text-sm font-bold text-muted-foreground'>
        <Repeat2 className='size-5' />
        <span>ZiDev reposted</span>
      </div>

      {/* POST CONTENT */}
      <div
        className={cn('flex gap-4', type === postTypes.Status && 'flex-col')}
      >
        {/* AVATAR */}
        <UserAvatar className={type === postTypes.Status ? 'hidden' : ''} />

        {/* CONTENT */}
        <div className='flex flex-1 flex-col gap-2'>
          {/* TOP */}
          <div className='flex w-full justify-between'>
            <Link href='/lamaWebDev' className='flex gap-4'>
              <div
                className={cn(
                  'flex flex-wrap items-center gap-2',
                  type === postTypes.Status && 'flex-col !items-start gap-0',
                )}
              >
                <h2 className='text-md font-bold'>Lama Dev</h2>
                <span
                  className={cn(
                    'text-muted-foreground',
                    type === postTypes.Status && 'text-sm',
                  )}
                >
                  @lamaWebDev
                </span>
                {type !== postTypes.Status && (
                  <span className='text-muted-foreground'>1 day ago</span>
                )}
              </div>
            </Link>

            {/* POST INFO */}
            <div className='relative h-4 w-4 cursor-pointer'>
              <AppImage path='icons/infoMore.svg' alt='' w={16} h={16} />
            </div>
          </div>

          {/* TEXT & MEDIA */}
          <Link href={`/lamaWebDev/status/123`}>
            <p className={cn(type === postTypes.Status && 'text-lg')}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              animi. Laborum commodi aliquam alias molestias odio, ab in,
              reprehenderit excepturi temporibus, ducimus necessitatibus fugiat
              iure nam voluptas soluta pariatur inventore.
            </p>
          </Link>
          <AppImage
            path='general/post.jpeg'
            alt=''
            w={600}
            h={600}
            className='overflow-hidden rounded-lg border border-border'
          />

          {/* AFTER FETCHING THE POST MEDIA */}
          {/* {fileDetails && fileDetails.fileType === fileTypes.Image ? (
            <AppImage
              path={fileDetails.filePath}
              alt=''
              w={fileDetails.width}
              h={fileDetails.height}
              className={fileDetails.customMetadata?.sensitive ? 'blur-lg' : ''}
            />
          ) : (
            <AppVideo
              path={fileDetails.filePath}
              className={fileDetails.customMetadata?.sensitive ? 'blur-lg' : ''}
            />
          )}
          {type === postTypes.Status && (
            <span className='text-textGray'>8:41 PM · Dec 5, 2024</span>
          )} */}
          <PostActions />
        </div>
      </div>
    </div>
  )
}
