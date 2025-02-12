import type { Dispatch, SetStateAction } from 'react'
import { XIcon } from 'lucide-react'

interface VideoPreviewProps {
  previewURL: string
  setMedia: Dispatch<SetStateAction<File | null>>
}

export const VideoPreview = ({ previewURL, setMedia }: VideoPreviewProps) => {
  return (
    <div className='relative'>
      <video src={previewURL} controls />
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
