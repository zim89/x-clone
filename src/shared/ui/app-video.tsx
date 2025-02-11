'use client'

import { IKVideo } from 'imagekitio-next'

const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT

if (!urlEndpoint) {
  throw new Error('Error: Please add urlEndpoint to .env or .env.local')
}

type AppVideoProps = {
  path: string
  className?: string
}

export const AppVideo = ({ path, className }: AppVideoProps) => {
  return (
    <IKVideo
      urlEndpoint={urlEndpoint}
      path={path}
      className={className}
      transformation={[
        { width: '1920', height: '1080', q: '90' },
        { raw: 'l-text,i-ZiDev,fs-100,co-white,l-end' },
      ]}
      controls
    />
  )
}
