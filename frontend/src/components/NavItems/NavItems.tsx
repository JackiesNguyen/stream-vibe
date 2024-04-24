import { Link, useLocation } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import { headerLinks } from '~/constants/nav'
import cn from '~/libs/utils'

const NavItems = () => {
  const location = useLocation()
  return (
    <ul className="flex items-center gap-5 rounded-lg bg-black px-4 py-2 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
      {headerLinks.map((item) => {
        const isActive = location.pathname === item.path
        return (
          <li key={uuidv4()} className={cn('text-[#BFBFBF]', { 'rounded-sm bg-[#333] p-2 text-white': isActive })}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems
