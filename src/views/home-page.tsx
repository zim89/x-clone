import { ShareToolbar } from '@/features/share-toolbar'
import { TabsNavbar } from '@/features/tabs-navbar'

export const HomePage = () => {
  return (
    <div>
      <TabsNavbar />
      <div className='p-4'>
        <ShareToolbar />
        {/* <Feed /> */}
      </div>
    </div>
  )
}
