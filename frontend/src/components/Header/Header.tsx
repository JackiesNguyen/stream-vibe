import { Link } from 'react-router-dom'
import { Bell, SearchIcon } from 'lucide-react'

import { logo } from '~/assets'
import PATH from '~/constants/paths'

import MobileNav from '../MobileNav'
import NavItems from '../NavItems'

const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-transparent">
      <div className="flex items-center justify-between px-7 py-5 lg:px-10">
        <Link to={PATH.USER.HOME}>
          <img src={logo} alt="logo" className="w-29 h-9 object-cover sm:h-12 sm:w-40 lg:h-16 lg:w-52" />
        </Link>
        <nav className="hidden lg:block">
          <NavItems />
        </nav>
        <div className="hidden lg:flex lg:items-center lg:gap-10">
          <SearchIcon className="text-white" />
          <Bell className="text-white" />
        </div>
        {/* Mobile nav */}
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
