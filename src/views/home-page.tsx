import { Feed } from '@/features/post'
import { ShareToolbar } from '@/features/share-toolbar'
import { TabsNavbar } from '@/features/tabs-navbar'

export const HomePage = () => {
  return (
    <div>
      <TabsNavbar />
      <ShareToolbar />
      <Feed />
    </div>
  )
}
