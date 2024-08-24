import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from './layouts/Navber'
import SearchBer from './layouts/SearchBer'
import Footer from './layouts/Footer'

export default function RootLayouts() {
  return (
    <>
    <Navber/>
    <SearchBer/>
    <Outlet/>
    <Footer/>
    </>
  )
}
