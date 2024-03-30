import React from 'react'
import Container from './layer/Container';
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { FaSearch, FaUser,FaCaretDown,FaShoppingCart } from "react-icons/fa";






const SearchBar = () => {
  return (
    <div className='py-6 bg-[#F5F5F3]'>
       <Container className="flex justify-between items-center">

        <div className="">

         <p className='flex items-center gap-x-2 font-DM text-sm text-[#262626]'><HiOutlineBars3BottomLeft /> Shop by category</p>
        </div>

        <div className="relative">
          <input className='w-[621px] py-4 px-5 border-0 outline-0 placeholder:font-DM placeholder:text-sm placeholder:text-[#C4C4C4]' placeholder='Search Products' type="search" />
          <FaSearch className='absolute right-5 top-1/2 translate-y-[-50%]' />

        </div>

        <div className="flex items-center gap-x-10">
          <div className='flex items-center gap-x-1'>
            <FaUser/>
            <FaCaretDown />
          </div>

          <div>
            <FaShoppingCart />
          </div>

        </div>



       </Container>

    </div>
  )
}

export default SearchBar