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
    </>
  )
}

export default RootLayout
