import { Bookmark, Heart, MessageSquare, Repeat2, Upload } from 'lucide-react'

export const PostActions = () => {
  return (
    <div className='my-2 flex items-center justify-between gap-4 lg:gap-16'>
      <div className='flex flex-1 items-center justify-between'>
        {/* COMMENTS */}
        <button
          type='button'
          className='flex items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-accent'
        >
          <MessageSquare className='size-5' />
          <span className='text-sm'>157</span>
        </button>

        {/* REPOST */}
        <button
          type='button'
          className='flex items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-accent'
        >
          <Repeat2 className='size-6 stroke-[1.5px]' />
          <span className='text-sm'>157</span>
        </button>

        {/* LIKE */}
        <button
          type='button'
          className='flex items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-accent'
        >
          <Heart className='size-5' />
          <span className='text-sm group-hover:text-chart-3'>157</span>
        </button>
      </div>
      <div className='flex items-center gap-2'>
        <button
          type='button'
          className='text-muted-foreground transition-colors duration-300 hover:text-accent'
        >
          <Bookmark className='size-5' />
        </button>
        <button
          type='button'
          className='text-muted-foreground transition-colors duration-300 hover:text-accent'
        >
          <Upload className='size-5' />
        </button>
      </div>
    </div>
  )
}
