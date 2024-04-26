import { iconMenu, logo } from '~/assets'

import NavItems from '../NavItems'
import { Sheet, SheetContent, SheetTrigger } from '../Sheet'

const MobileNav = () => {
  return (
    <nav className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <div className="rounded-lg bg-black-15 p-2">
            <img src={iconMenu} alt="icon-menu" />
          </div>
        </SheetTrigger>
        <SheetContent>
          <div className="mt-10">
            <img src={logo} alt="logo" className="mb-8 h-[50px] w-[165px] object-cover" />
            <NavItems />
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav
