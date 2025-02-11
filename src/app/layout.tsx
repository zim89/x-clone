import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { AsideLeft } from '@/widgets/aside-left'
import { AsideRight } from '@/widgets/aside-right'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'X Clone',
  description: 'Next.js social media application project',
}

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <html lang='en' className='dark' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='container mx-auto flex justify-center gap-2'>
          <div className='w-[275px]'>
            <AsideLeft />
          </div>
          <main className='w-[600px] border-x border-border'>
            {children}
            {modal}
          </main>
          <div className='w-[350px]'>
            <AsideRight />
          </div>
        </div>
      </body>
    </html>
  )
}
