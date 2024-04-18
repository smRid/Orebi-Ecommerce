import React from 'react'
import Navbar from '../Navbar'
import SearchBar from '../SearchBar'
import { Outlet } from 'react-router-dom'


const RootLayout = () => {
  return (
    <>
      <Navbar/>
      <SearchBar/>
      <Outlet/>
      <p className='py-4 bg-slate-800 text-gray-300 text-center mt-80'>Footer components</p>
    </>
  )
}

export default RootLayout
