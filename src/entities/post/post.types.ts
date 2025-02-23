export interface Post {
  id: number
  createdAt: string
  updatedAt: string
  desc?: string | null
  img?: string | null
  imgHeight?: number | null
  video?: string | null
  isSensitive: boolean
  userId: string
  rePostId?: number | null
  parentPostId?: number | null
}
