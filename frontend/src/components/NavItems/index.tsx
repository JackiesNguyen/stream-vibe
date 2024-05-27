import { Link, useLocation } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import { headerLinks } from '~/constants/navLinks'
import cn from '~/libs/utils'

const NavItems = () => {
  const location = useLocation()
  return (
    <ul className="lg:bg-black flex flex-col gap-5 rounded-lg bg-transparent px-4 py-2 lg:flex-row lg:items-center lg:border-4 lg:border-black-12 lg:bg-black-06 lg:shadow-primary">
      {headerLinks.map((item) => {
        const isActive = location.pathname === item.path
        return (
          <li key={uuidv4()} className={cn('text-[#BFBFBF]', { 'rounded-md bg-black-10 p-2 text-white': isActive })}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems
