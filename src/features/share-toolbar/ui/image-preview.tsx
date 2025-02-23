import type { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { XIcon } from 'lucide-react'
import { ImageTypeEnum } from '@/shared/constants'
import { cn } from '@/shared/lib'
import type { ImageSettings } from '@/shared/types'

interface ImagePreviewProps {
  previewURL: string
  settings: ImageSettings
  setIsEditorOpen: Dispatch<SetStateAction<boolean>>
  setMedia: Dispatch<SetStateAction<File | null>>
}

export const ImagePreview = ({
  previewURL,
  settings,
  setIsEditorOpen,
  setMedia,
}: ImagePreviewProps) => {
  return (
    <div className='relative overflow-hidden rounded-xl'>
      <Image
        src={previewURL}
        alt='Image preview'
        width={600}
        height={600}
        className={cn(
          'w-full',
          settings.type === ImageTypeEnum.Original && 'h-full object-contain',
          settings.type === ImageTypeEnum.Wide && 'aspect-video object-cover',
          settings.type === ImageTypeEnum.Square &&
            'aspect-square object-cover',
        )}
      />
      <button
        type='button'
        className='absolute left-2 top-2 rounded-full bg-background/80 px-4 py-1 text-sm font-bold text-foreground transition-colors duration-300 hover:bg-background/70'
        onClick={() => setIsEditorOpen(true)}
      >
        Edit
      </button>
      <button
        type='button'
        className='absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-foreground transition-colors duration-300 hover:bg-background/70'
        onClick={() => setMedia(null)}
      >
        <XIcon className='size-4' />
      </button>
    </div>
  )
}
