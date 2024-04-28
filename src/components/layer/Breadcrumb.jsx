import React from 'react'
import { FaAngleRight } from "react-icons/fa";
// import { TfiAngleRight } from "react-icons/tfi";

const Breadcrumb = () => {
  return (
    <p className='flex items-center mt-3 capitalize'><span>Home</span> <FaAngleRight className='text-xxl mt-1'/> <span>{window.location.pathname.split("/")[1]}</span></p>
  )
}

export default Breadcrumb