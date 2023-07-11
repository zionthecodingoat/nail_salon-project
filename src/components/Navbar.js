import React from 'react'

import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.webp'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='flex flex-col lg:flex-row items-center justify-between mx-auto'>
          <div className='logo pr-4'>
            <Link to='/' >
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className='lg:translate-y-3'>
            <ul className='flex flex-row justify-between items-center space-x-12 font-semibold text-3xl text-red-700'>
              <li>
                <NavLink className='link' to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink className='link' to='services'>Services</NavLink>
              </li>
              <li>
                <NavLink className='link' to='about'>About</NavLink>
              </li>
              <li>
                <NavLink className='link' to='contact'>Contact</NavLink>
              </li>
            </ul>
          </div>
      </div>
    </nav>
  )
}
