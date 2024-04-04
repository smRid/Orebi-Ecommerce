import React, { useEffect, useState } from 'react'
import Container from './layer/Container'
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { FaSearch,FaUser,FaAngleRight, FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import Listitem from './layer/Listitem';



const SearchBar = () => {

  let [show, setShow] = useState (false)

  useEffect(()=>{
    if(window){
      setShow(false)
  }else{
      setShow(true)
  }
  },[])


  let catagory = ()=>{
    setShow(!show)
  }



  let [showx, setShowy] = useState (false)

  useEffect(()=>{
    if(window){
      setShowy(false)
  }else{
      setShowy(true)
  }
  },[])

  let acc = ()=>{
    setShowy(!showx)
  }

  return (
    <div className='lg:py-10 py-2 bg-[#F5F5F3]'>

      <Container className='flex justify-between items-center font-DM flex-row px-3 lg:px-0'>

        <div onClick={catagory} className='relative order-1'>
          <p className='flex items-center gap-x-2  text-[#262626] text-sm cursor-pointer'>
            <HiOutlineBars3BottomLeft />
            <span className="hidden lg:inline">Shop by category</span>
            <span className="inline lg:hidden mr-4">Category</span>
          </p>
{
            show && (

              <ul className='absolute top-full left-0 bg-[#262626] text-[#767676] translate-y-6 lg:py-4 py-2 lg:w-[263px] w-[200px] lg:px-5 px-2 flex flex-col lg:gap-[16px] gap-[8px] z-50'>

              <Listitem className='text-[#767676] hover:text-[#FFFFFF] py-4 font-[400] hover:px-8 mt-4' href='/' text='Accesories ' /> 

              <Listitem className='text-[#767676] hover:text-[#FFFFFF] py-4 font-[400] hover:px-8 mt-4' href='/' text='Furniture' />

              <Listitem className='text-[#767676] hover:text-[#FFFFFF] py-4 font-[400] hover:px-8 mt-4' href='/' text='Electronics' />

              <Listitem className='text-[#767676] hover:text-[#FFFFFF] py-4 font-[400] hover:px-8 mt-4' href='/' text='Clothes' />

              <Listitem className='text-[#767676] hover:text-[#FFFFFF] py-4 font-[400] hover:px-8 mt-4' href='/' text='Bags' />

              <Listitem className='text-[#767676] hover:text-[#FFFFFF] py-4 font-[400] hover:px-8 mt-4' href='/' text='Home appliances' />

            </ul>



            )
          }


        </div>

        <div className='relative lg:order-2 order-3'>
          <input type="text" placeholder='Search Products' className='lg:w-[601px] w-full lg:py-4 py-1 px-5 bg-white outline-none' />
          <FaSearch className='absolute right-1 lg:right-5 top-1/2 translate-y-[-50%]' />

        </div>


        <div className='flex items-center gap-x-2 lg:gap-x-10 cursor-pointer lg:order-3 order-2'>
          <div className='flex items-center gap-x-1 '>
            <FaUser />
            <IoMdArrowDropdown />
{/* 
            <div onClick={acc} className='relative' >
              <ul className=' right-0 w-[200px] absolute flex flex-col gap-[25px] text-center translate-y-8' >
                <Listitem className="pt-[17px] pb-[15px] pl-[59px] pr-[58px] bg-black hover:bg-white text-[#fff] hover:text-black" href="/" text="My Account"/>

                <Listitem className="py-4 pt-[17px] pb-[15px] pl-[72px] pr-[75px]  text-[#272727] hover:text-white bg-[#ffffff] hover:bg-black font-[400]" href="/" text="Log Out" />
              </ul>
            </div> */}





          </div>
          <div className='pr-3'>
            <FaShoppingCart />

          </div>
        </div>

      </Container>

    </div>
  )
}

export default SearchBar
