'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/common/avatar'
import { fileTypes, imageTypes } from '@/shared/constants'
import type { ImageSettings } from '@/shared/types'
import { shareAction } from '../actions'
import { ImageEditor } from './image-editor'
import { ImagePreview } from './image-preview'
import { ShareActions } from './share-actions'
import { VideoPreview } from './video-preview'

export const ShareToolbar = () => {
  const [media, setMedia] = useState<File | null>(null)
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const [settings, setSettings] = useState<ImageSettings>({
    type: imageTypes.Original,
    sensitive: false,
  })

  const onMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0])
    }
  }

  const previewURL = media ? URL.createObjectURL(media) : null

  return (
    <form
      className='flex gap-4 p-4'
      action={formData => shareAction(formData, settings)}
    >
      {/* AVATAR */}
      <Avatar>
        <AvatarImage src='https://github.com/shadcn.png' />
        <AvatarFallback>ZD</AvatarFallback>
      </Avatar>

      {/* OTHERS */}
      <div className='flex-1 space-y-4'>
        <input
          type='text'
          name='desc'
          placeholder='What is happening?!'
          autoComplete='off'
          className='flex h-10 w-full items-center border-0 bg-background text-base caret-accent outline-none'
        />

        {/* PREVIEW IMAGE */}
        {media?.type.includes(fileTypes.Image) && previewURL && (
          <ImagePreview
            previewURL={previewURL}
            settings={settings}
            setIsEditorOpen={setIsEditorOpen}
            setMedia={setMedia}
          />
        )}

        {/* PREVIEW VIDEO */}
        {media?.type.includes(fileTypes.Video) && previewURL && (
          <VideoPreview previewURL={previewURL} setMedia={setMedia} />
        )}

        {/* IMAGE EDITOR */}
        {isEditorOpen && previewURL && (
          <ImageEditor
            open={isEditorOpen}
            onOpenChange={() => setIsEditorOpen(false)}
            previewURL={previewURL}
            settings={settings}
            setSettings={setSettings}
          />
        )}

        <ShareActions onMediaChange={onMediaChange} />
      </div>
    </form>
  )
}
