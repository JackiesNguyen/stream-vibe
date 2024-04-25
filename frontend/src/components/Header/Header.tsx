import { Link } from 'react-router-dom'
import { Bell, SearchIcon } from 'lucide-react'

import { logo } from '~/assets'
import PATH from '~/constants/paths'

import NavItems from '../NavItems'

const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-transparent">
      <div className="flex items-center justify-between px-10 py-5">
        <Link to={PATH.USER.HOME}>
          <img src={logo} alt="logo" className="max-h-[60px] max-w-[200px] object-cover" />
        </Link>
        <NavItems />
        <div className="flex items-center gap-10">
          <SearchIcon className="text-white" />
          <Bell className="text-white" />
        </div>
      </div>
    </header>
  )
}

export default Header
