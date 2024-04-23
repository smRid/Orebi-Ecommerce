import React, { useState , useRef, useEffect } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import Container from "./layer/Container";
import Listitem from "./layer/Listitem";
import { RxCross2 } from "react-icons/rx";
import cartImg from '../assets/pic1.png' 
import Button from "./layer/Button";
 

const SearchBar = () => {
  let [cat,setCat] = useState(false)
  let [cart,setCart] = useState(false)

  let catRef = useRef()
  let cartRef = useRef()


  useEffect(()=>{
      document.body.addEventListener("click", (element)=>{
        if (catRef.current.contains(element.target)) {
          setCat(true)
        } else{
          setCat(false)
        }
      })
  },[])

  
  useEffect(()=>{
      document.body.addEventListener("click", (element)=>{
        if (cartRef.current.contains(element.target)) {
          setCart(true)
        } else{
          setCart(false)
        }
      })
  },[])

  return (
    <div className="lg:py-5 pt-3  bg-[#F5F5F3]">
      <Container className="flex justify-between lg:items-center  flex-row flex-wrap">
        <div ref={catRef} className="relative lg:order-1 order-1 pl-3 lg:pl-0">
          <p className="cursor-pointer flex items-center gap-x-2 font-DM text-sm text-[#262626]">
            <HiBars3BottomLeft /> Shop by Category
          </p>
          {cat && (  
            <ul className="absolute translate-y-[23px] top-full left-0 bg-[#262626] z-10 w-[263px]">
            <Listitem className='font-DM test-sm hover:font-bold hover:after:w-0 text-white/70 hover:text-white py-4 px-5 hover:ml-3 border-b border-[#2D2D2D]' text="Home"/>
            <Listitem className='font-DM test-sm hover:font-bold  hover:after:w-0 text-white/70 hover:text-white py-4 px-5 hover:ml-3 border-b border-[#2D2D2D]' text="Accesories"/>
            <Listitem className='font-DM test-sm hover:font-bold  hover:after:w-0 text-white/70 hover:text-white py-4 px-5 hover:ml-3 border-b border-[#2D2D2D]' text="Furniture"/>
            <Listitem className='font-DM test-sm hover:font-bold hover:after:w-0 text-white/70 hover:text-white py-4 px-5 hover:ml-3 border-b border-[#2D2D2D]' text="Electronics"/>
            <Listitem className='font-DM test-sm hover:font-bold hover:after:w-0 text-white/70 hover:text-white py-4 px-5 hover:ml-3 border-b border-[#2D2D2D]' text="Clothes"/>
            <Listitem className='font-DM test-sm hover:font-bold hover:after:w-0 text-white/70 hover:text-white py-4 px-5 hover:ml-3 border-b border-[#2D2D2D]' text="Bags"/>
            <Listitem className='font-DM test-sm hover:font-bold hover:after:w-0 text-white/70 hover:text-white py-4 px-5 hover:ml-3 ' text="Home appliances"/>
          </ul>
            )
          }
        </div>
        <div className="relative lg:order-2 order-3 w-full lg:w-auto bg-red-500 mt-3 lg:mt-0">
          <input
            type="text"
            placeholder="Search Products"
            className=" text-sm lg:text-base lg:w-[601px] w-full lg:py-4 py-2 lg:px-5 px-3 bg-white border-0 outline-none border-b border-slate-300"
          />
          <IoSearch className="absolute right-5 top-1/2 translate-y-[-50%]" />
        </div>
        <div className="flex items-center gap-x-10 lg:order-3 order-2 pr-3 lg:pr-0">
          <div className="flex items-center gap-x-1">
            <FaUser />
            <IoMdArrowDropdown />
              <div className="account absolute w-36 top-full py-5 bg-black"></div>
              <div className="logout"></div>
          </div>
          <div ref={cartRef} className="relative cursor-pointer">
            <FaShoppingCart />
              {cart && (
              <div className="cart w-[360px] absolute right-0 top-full translate-y-[15px] z-10">
                <div className="top p-5  bg-[#F5F5F3] flex justify-between items-center">
                  <div className="left flex items-center gap-x-5">
                  <div className="image w-20 h-20 border border-gray-300" >
                    <img src={cartImg} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="text">
                    <h2 className="font-DM text-[#262626] text-sm font-bold mb-2">Black Smart Watch</h2>
                    <p className="font-DM text-[#262626] text-sm font-bold">$44.00</p>
                  </div>
                  </div>
                  <RxCross2/>
                </div>
                <div className="bottom p-5 py-3.5  bg-white">
                  <h2 className=" mb-3 font-DM font-normal text-[#767676]">Subtotal: <span className="font-bold text-[#262626]">$44.00</span></h2>
                  <div className="button flex gap-x-5">
                    <Button text="View Cart"/>
                    <Button text="View Cart"/>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchBar;
