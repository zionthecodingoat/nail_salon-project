import React from 'react'

import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Banner from '../components/Banner'

export default function RootLayout() {
  return (
    <div className='root-layout w-[90%] sm:w-[80%] mx-auto'>
      <header>
        <Navbar />
        <Banner />
      </header>

      <Outlet />

      <Footer />
    </div>
  )
}
