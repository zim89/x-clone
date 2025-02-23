'use server'

import { ImageTypeEnum } from '@/shared/constants'
import { imagekit } from '@/shared/lib'
import type { ImageType } from '@/shared/types'

export const shareAction = async (
  formData: FormData,
  settings: { type: ImageType; sensitive: boolean },
) => {
  const file = formData.get('file') as File
  // const desc = formData.get('desc') as string

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const transformation = `w-600, ${
    settings.type === ImageTypeEnum.Square
      ? 'ar-1-1'
      : settings.type === ImageTypeEnum.Wide
        ? 'ar-16-9'
        : ''
  }`

  imagekit.upload(
    {
      file: buffer,
      fileName: file.name,
      folder: '/posts',
      ...(file.type.includes('image') && {
        transformation: {
          pre: transformation,
        },
      }),
      customMetadata: {
        sensitive: settings.sensitive,
      },
    },
    function (error, result) {
      if (error) console.log(error)
      else console.log(result)
    },
  )
}
