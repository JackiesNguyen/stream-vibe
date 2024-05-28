import { Outlet } from 'react-router-dom'

import { Footer, Header } from '~/components'

interface IDefaultLayoutProps {
  headerPosition: string
}

const DefaultLayout = ({ headerPosition }: IDefaultLayoutProps) => (
  <>
    <Header headerPosition={headerPosition} />
    <div className="min-h-screen">
      <Outlet />
    </div>
    <Footer />
  </>
)

export default DefaultLayout
