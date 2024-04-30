import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
    <a className="flex items-center justify-center" href="#" rel="ugc">
      <svg xmlns="http://www.w3.org/2000/svg"  width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
        <path d="M8 14v.5" />
        <path d="M16 14v.5" />
        <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
      </svg>
      <span className="text-xl font-bold">Namma Irani Chai</span>
    </a>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <NavLink to="/" className="text-xl font-medium hover:underline underline-offset-4">
        Home
      </NavLink>
      <NavLink to='/cookies' className="text-sm font-medium hover:underline underline-offset-4">
        Cookies
      </NavLink>
      <NavLink to='/about' className="text-sm font-medium hover:underline underline-offset-4">
        About us 
      </NavLink>
      <NavLink to='/location' className="text-sm font-medium hover:underline underline-offset-4">
        Location
      </NavLink>
      <NavLink to='/contact' className="text-sm font-medium hover:underline underline-offset-4">
        Contact
      </NavLink>
    </nav>
  </header>
  )
}

export default Header