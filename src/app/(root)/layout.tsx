import type { Metadata } from 'next'
import { AsideLeft } from '@/widgets/aside-left'
import { AsideRight } from '@/widgets/aside-right'

export const metadata: Metadata = {
  title: 'X Clone',
  description: 'Next.js social media application project',
}

interface LayoutProps {
  children: React.ReactNode
  modal: React.ReactNode
}

export default function RootLayout({ children, modal }: Readonly<LayoutProps>) {
  return (
    <div className='container mx-auto flex justify-center gap-2'>
      <aside className='w-[275px]'>
        <AsideLeft />
      </aside>
      <main className='w-[600px] border-x border-border'>
        {children}
        {modal}
      </main>
      <aside className='w-[350px]'>
        <AsideRight />
      </aside>
    </div>
  )
}
