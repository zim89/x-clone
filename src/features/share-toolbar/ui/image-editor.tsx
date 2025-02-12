import type { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import {
  ArrowLeftIcon,
  ImageIcon,
  RectangleHorizontalIcon,
  SquareIcon,
} from 'lucide-react'
import { imageTypes } from '@/shared/constants'
import { cn } from '@/shared/lib'
import type { ImageSettings, ImageType } from '@/shared/types'

interface ImageEditorProps {
  onClose: () => void
  previewURL: string
  settings: ImageSettings
  setSettings: Dispatch<SetStateAction<ImageSettings>>
}

export const ImageEditor = ({
  onClose,
  previewURL,
  settings,
  setSettings,
}: ImageEditorProps) => {
  const onChangeSensitive = (sensitive: boolean) => {
    setSettings(prev => ({ ...prev, sensitive }))
  }
  const onChangeType = (type: ImageType) => {
    setSettings(prev => ({ ...prev, type }))
  }
  return (
    <div className='fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-foreground/30'>
      <div className='flex flex-col gap-4 rounded-xl bg-background p-6'>
        {/* TOP */}
        <div className='flex items-center justify-between'>
          <button
            type='button'
            onClick={onClose}
            className='flex items-center gap-8'
          >
            <ArrowLeftIcon />
            <h2 className='text-xl font-bold'>Media Settings</h2>
          </button>
          <button
            className='bg-white rounded-full px-4 py-2 font-bold text-background'
            onClick={onClose}
          >
            Save
          </button>
        </div>

        {/* IMAGE CONTAINER */}
        <div className='flex h-[600px] w-[600px] items-center'>
          <Image
            src={previewURL}
            alt=''
            width={600}
            height={600}
            className={cn(
              'w-full',
              settings.type === imageTypes.Original && 'h-full object-contain',
              settings.type === imageTypes.Wide && 'aspect-video object-cover',
              settings.type === imageTypes.Square &&
                'aspect-square object-cover',
            )}
          />
        </div>

        {/* SETTINGS */}
        <div className='flex items-center justify-between text-sm'>
          <div className='flex items-center gap-8'>
            <button
              type='button'
              className='flex items-center gap-2'
              onClick={() => onChangeType(imageTypes.Original)}
            >
              <ImageIcon
                className={cn(
                  'stroke-[1.5px]',
                  settings.type === imageTypes.Original
                    ? 'stroke-secondary'
                    : 'stroke-foreground',
                )}
              />
              {imageTypes.Original}
            </button>
            <button
              type='button'
              className='flex items-center gap-2'
              onClick={() => onChangeType(imageTypes.Wide)}
            >
              <RectangleHorizontalIcon
                className={cn(
                  'size-7 stroke-[1.5px]',
                  settings.type === imageTypes.Wide
                    ? 'stroke-secondary'
                    : 'stroke-foreground',
                )}
              />
              {imageTypes.Wide}
            </button>
            <button
              type='button'
              className='flex items-center gap-2'
              onClick={() => onChangeType(imageTypes.Square)}
            >
              <SquareIcon
                className={cn(
                  'stroke-[1.5px]',
                  settings.type === imageTypes.Square
                    ? 'stroke-secondary'
                    : 'stroke-foreground',
                )}
              />
              {imageTypes.Square}
            </button>
          </div>
          <button
            type='button'
            className={cn(
              'rounded-full px-4 py-1 text-background',
              settings.sensitive
                ? 'bg-error text-error-foreground'
                : 'bg-foreground',
            )}
            onClick={() => onChangeSensitive(!settings.sensitive)}
          >
            Sensitive
          </button>
        </div>
      </div>
    </div>
  )
}
