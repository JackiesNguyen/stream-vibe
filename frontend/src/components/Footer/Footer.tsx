import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import { footerLinks } from '~/constants/navLink'

const Footer = () => {
  return (
    <footer className="bg-black-06 p-5 py-10 text-white lg:px-40 lg:pb-10 lg:pt-32">
      <ul className="grid grid-cols-2 gap-5 md:flex md:items-start md:justify-between">
        {footerLinks.map((item) => {
          return (
            <li key={uuidv4()}>
              <h1 className="mb-6 text-lg font-bold">{item.heading}</h1>
              <ul className="flex flex-col gap-3 md:gap-5">
                {item.navigation.map((nav) => {
                  return (
                    <li key={uuidv4()} className="font-medium text-grey-60">
                      <Link to={nav.link} className="font-medium text-grey-60 hover:underline">
                        {nav.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
      <div className="mt-20 flex flex-col gap-5 border-t-[1px] border-black-15 pt-10 text-sm font-normal text-grey-60 md:flex-row md:items-center md:justify-between">
        <span>@2023 JackiesNguyen, All Rights Reserved</span>
        <ul className="flex items-center gap-10">
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
