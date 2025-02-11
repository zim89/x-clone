'use client'

import { IKImage } from 'imagekitio-next'

const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT

if (!urlEndpoint) {
  throw new Error('Error: Please add urlEndpoint to .env or .env.local')
}

type AppImageProps = {
  path: string
  w?: number
  h?: number
  alt: string
  className?: string
  tr?: boolean
}

export const AppImage = ({ path, w, h, alt, className, tr }: AppImageProps) => {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={path}
      {...(tr
        ? { transformation: [{ width: `${w}`, height: `${h}` }] }
        : { width: w, height: h })}
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      className={className}
    />
  )
}
