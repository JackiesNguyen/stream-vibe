import { Link, useLocation } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import { headerLinks } from '~/constants/navLink'
import cn from '~/libs/utils'

const NavItems = () => {
  const location = useLocation()
  return (
    <ul className="shadow-custom flex items-center gap-5 rounded-lg border border-gray-700 bg-black px-4 py-2">
      {headerLinks.map((item) => {
        const isActive = location.pathname === item.path
        return (
          <li key={uuidv4()} className={cn('text-[#BFBFBF]', { 'rounded-md bg-[#1A1A1A] p-2 text-white': isActive })}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems
