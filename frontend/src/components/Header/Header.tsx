import { Link } from 'react-router-dom'
import { Bell, SearchIcon } from 'lucide-react'

import { logo } from '~/assets'
import PATH from '~/constants/paths'

import NavItems from '../NavItems'

const Header = () => {
  return (
    <header className="bg-[#333]">
      <div className="flex items-center justify-between p-5">
        <Link to={PATH.USER.HOME}>
          <img src={logo} alt="logo" className="max-h-[60px] max-w-[200px] object-cover" />
        </Link>
        <NavItems />
        <div className="flex items-center gap-5">
          <SearchIcon className="text-white" />
          <Bell className="text-white" />
        </div>
      </div>
    </header>
  )
}

export default Header
