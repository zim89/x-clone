import {
  CalendarClockIcon,
  ImageIcon,
  ImagePlayIcon,
  MapPinIcon,
  SmileIcon,
} from 'lucide-react'

interface ShareActionsProps {
  onMediaChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const ShareActions = ({ onMediaChange }: ShareActionsProps) => {
  return (
    <div className='flex flex-wrap items-center justify-between gap-4'>
      <div className='flex flex-wrap gap-4'>
        <input
          type='file'
          name='file'
          onChange={onMediaChange}
          className='hidden'
          id='file'
          accept='image/*,video/*'
        />
        <label htmlFor='file' className='cursor-pointer text-accent'>
          <ImageIcon className='stroke-[1.5px]' />
        </label>

        <button className='text-accent'>
          <ImagePlayIcon className='stroke-[1.5px]' />
        </button>
        <button className='text-accent'>
          <CalendarClockIcon className='stroke-[1.5px]' />
        </button>
        <button className='text-accent'>
          <SmileIcon className='stroke-[1.5px]' />
        </button>
        <button className='text-accent'>
          <MapPinIcon className='stroke-[1.5px]' />
        </button>
      </div>
      <button className='flex h-9 items-center rounded-full bg-primary px-4 font-bold text-primary-foreground transition-colors duration-300 hover:bg-primary/80'>
        Post
      </button>
    </div>
  )
}
