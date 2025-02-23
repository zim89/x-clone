export const AppConfig = {
  baseUrl: 'http://localhost:3000',
  isClient: typeof window !== 'undefined',
} as const

export const ImageTypeEnum = {
  Original: 'original',
  Wide: 'wide',
  Square: 'square',
} as const

export const PostTypeEnum = {
  Status: 'status',
  Comment: 'comment',
} as const

export const FileTypeEnum = {
  Image: 'image',
  Video: 'video',
} as const
