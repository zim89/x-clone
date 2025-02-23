import { Feed } from '@/features/post'
import { ShareToolbar } from '@/features/share-toolbar'
import { TabsNavbar } from '@/features/tabs-navbar'

export default function Home() {
  return (
    <div>
      <TabsNavbar />
      <ShareToolbar />
      <Feed />
    </div>
  )
}
