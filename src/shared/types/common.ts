import { imageTypes, postTypes } from '@/shared/constants'

export type ImageType = (typeof imageTypes)[keyof typeof imageTypes]

export type ImageSettings = {
  type: ImageType
  sensitive: boolean
}

export type PostType = (typeof postTypes)[keyof typeof postTypes]

export interface CustomMetadata {
  sensitive: boolean
}

export interface FileDetailsResponse {
  width: number
  height: number
  filePath: string
  url: string
  fileType: string
  customMetadata?: CustomMetadata
}
