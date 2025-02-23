import type { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import {
  ArrowLeftIcon,
  ImageIcon,
  RectangleHorizontalIcon,
  SquareIcon,
} from 'lucide-react'
import { Button } from '@/shared/ui/common/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/common/dialog'
import { ImageTypeEnum } from '@/shared/constants'
import { cn } from '@/shared/lib'
import type { ImageSettings, ImageType } from '@/shared/types'

interface ImageEditorProps {
  previewURL: string
  settings: ImageSettings
  open: boolean
  onOpenChange: (open: boolean) => void
  setSettings: Dispatch<SetStateAction<ImageSettings>>
}

export const ImageEditor = ({
  previewURL,
  settings,
  open,
  onOpenChange,
  setSettings,
}: ImageEditorProps) => {
  const onChangeSensitive = (sensitive: boolean) => {
    setSettings(prev => ({ ...prev, sensitive }))
  }

  const onChangeType = (type: ImageType) => {
    setSettings(prev => ({ ...prev, type }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='rounded-xl'>
        <DialogHeader>
          <DialogTitle asChild>
            <div className='flex items-center justify-between'>
              <button
                type='button'
                onClick={() => onOpenChange(false)}
                className='flex items-center gap-8 opacity-80 transition-opacity duration-300 hover:opacity-100'
              >
                <ArrowLeftIcon />
                <h2 className='text-xl font-bold'>Media Settings</h2>
              </button>
              <Button
                onClick={() => onOpenChange(false)}
                className='text-base font-bold'
              >
                Save
              </Button>
            </div>
          </DialogTitle>

          {/* IMAGE CONTAINER */}
          <div className='flex h-[600px] w-[600px] items-center'>
            <Image
              src={previewURL}
              alt=''
              width={600}
              height={600}
              className={cn(
                'w-full',
                settings.type === ImageTypeEnum.Original &&
                  'h-full object-contain',
                settings.type === ImageTypeEnum.Wide &&
                  'aspect-video object-cover',
                settings.type === ImageTypeEnum.Square &&
                  'aspect-square object-cover',
              )}
            />
          </div>

          {/* SETTINGS */}
          <div className='flex items-center justify-between text-sm'>
            <div className='flex items-center gap-8'>
              <button
                type='button'
                className='group flex items-center gap-2 text-primary/80 transition-all duration-300 hover:text-primary'
                onClick={() => onChangeType(ImageTypeEnum.Original)}
              >
                <ImageIcon
                  className={cn(
                    'stroke-[1.5px] transition-colors duration-300 group-hover:stroke-accent',
                    settings.type === ImageTypeEnum.Original && 'stroke-accent',
                  )}
                />
                {ImageTypeEnum.Original}
              </button>
              <button
                type='button'
                className='group flex items-center gap-2 text-primary/80 transition-all duration-300 hover:text-primary'
                onClick={() => onChangeType(ImageTypeEnum.Wide)}
              >
                <RectangleHorizontalIcon
                  className={cn(
                    'size-7 stroke-[1.5px] transition-colors duration-300 group-hover:stroke-accent',
                    settings.type === ImageTypeEnum.Wide && 'stroke-accent',
                  )}
                />
                {ImageTypeEnum.Wide}
              </button>
              <button
                type='button'
                className='group flex items-center gap-2 text-primary/80 transition-all duration-300 hover:text-primary'
                onClick={() => onChangeType(ImageTypeEnum.Square)}
              >
                <SquareIcon
                  className={cn(
                    'stroke-[1.5px] transition-colors duration-300 group-hover:stroke-accent',
                    settings.type === ImageTypeEnum.Square && 'stroke-accent',
                  )}
                />
                {ImageTypeEnum.Square}
              </button>
            </div>
            <Button
              type='button'
              variant={settings.sensitive ? 'default' : 'outline'}
              onClick={() => onChangeSensitive(!settings.sensitive)}
            >
              Sensitive
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
