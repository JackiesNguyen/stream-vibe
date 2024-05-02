import { Outlet } from 'react-router-dom'

import { Footer, Header } from '~/components'

const DefaultLayout = () => (
  <>
    <Header />
    <div className="min-h-screen">
      <Outlet />
    </div>
    <Footer />
  </>
)

export default DefaultLayout
