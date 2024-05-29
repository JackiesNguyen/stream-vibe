import { Outlet } from 'react-router-dom'

import { Footer, Header } from '~/components'

interface IDefaultLayoutProps {
  isFixedPosition: boolean
}

const DefaultLayout = ({ isFixedPosition }: IDefaultLayoutProps) => (
  <>
    <Header isFixedPosition={isFixedPosition} />
    <div className="min-h-screen">
      <Outlet />
    </div>
    <Footer />
  </>
)

export default DefaultLayout
