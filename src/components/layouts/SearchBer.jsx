import React, { useEffect, useRef, useState } from 'react'
import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import Bar from '../icons/Bar'

import Input from '../Input'
import User from '../icons/User'
import ButtomAngle from '../icons/ButtomAngle'
import Cart from '../icons/Cart'
import { Link } from 'react-router-dom'
import List from '../List'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,remoneButton} from '../../slices/addToCart'
import {AiOutlineClose} from 'react-icons/ai'
import Button from '../Button'

export default function SearchBer() {
  let [open,setOpen]=useState(false)
  let [total,setTotal]=useState(0)
  let cartData=useSelector((state)=>(state.cartItem.cart))
  let sajib=useSelector((state)=>(state.cartItem.cartOpen))
  let signup=useRef(null)
  
  
  let dispatch=useDispatch()

  let handlebreadcrumbs=(name)=>{
    // console.log(name);
    
  }
  let handleIncrement=(item)=>{
    dispatch(increment(item))
    
  }
  let handleDecrement=(item)=>{
    dispatch(decrement(item))
   
    
  }
  let handleRemove=(item)=>{
    dispatch(remoneButton(item))
  }
  useEffect(()=>{
    let total=0
    cartData.map(item=>{
      total+=item.price*item.quantity
    })
    setTotal(total)
    setOpen(sajib)
  },[cartData])

  // let handleClick=(e)=>{
  //   if(signup.current.style.display=="none"){
  //     signup.current.style.display="block"
  //   }else{
  //     if(!signup.current.contains(e.target)){

  //       signup.current.style.display="none"
  //     }
  //   }
    
    
  // }
  return (
    <>
    <Section  className='bg-four py-10'>
        <Container>
            <Flex>
                <Flex className='w-3/12 items-center gap-x-2.5'>
                  <Bar/>
                   <div className='relative' >
                   <ul  className='hidden bg-[#2D2D2D] w-[263px] absolute top-[26px] -left-[28px]'>
                    <List className='py-4 px-5 hover:text-white' text='Accesories'/>
                    <List className='py-4 px-5 hover:text-white' text='Furniture'/>
                    <List className='py-4 px-5 hover:text-white' text='Electronics'/>
                    <List className='py-4 px-5 hover:text-white' text='Clothes'/>
                    <List className='py-4 px-5 hover:text-white' text='Bags'/>
                    <List className='py-4 px-5 hover:text-white' text='Home appliances'/>
                  </ul>
                 </div>
                  <p className='text-sm text-primary font-dm font-normal'>Shop by Category</p>
                </Flex>
                <div className='w-6/12 '>
                  <Input placeholder="Search Products"/>
                </div>
                <Flex className='w-3/12 gap-x-10 justify-end items-center relative'>
                  <Flex className='gap-x-2.5 items-center'>
                    <Link onClick={()=>handlebreadcrumbs("Sign Up")} to='/sign-up'>
                         <User />
                    </Link>
                      {/* <div onClick={handleClick}> */}
                      <ButtomAngle  />
                      
                      {/* <div ref={signup} className='hidden absolute top-[55px] right-[105px] z-10'>
                        <ul className=''>
                          <li className="bg-black text-white py-4 px-14 text-xl font-dm font-bold">Sign Up</li>
                          <li className=" text-black py-4 px-14 text-xl font-dm font-bold  border border-black">Log In</li>
                        </ul>
                      </div> */}
                      {/* </div> */}
                  </Flex>
                  <div onClick={()=>setOpen(true)}><Cart /></div>{cartData.length}
                </Flex>
            </Flex>
            
            {open &&
             <div className='bg-primary text-white h-screen w-2/6 absolute top-0 right-0 z-10'>
              <div onClick={()=>setOpen(false)}><button className=' m-2 p-2 bg-black text-white border-white border border-solid text-white' onClick={()=>handleRemove(item)}><AiOutlineClose className='text-xl'/></button></div>
              <ul className='flex justify-between pt-7 px-2 py-5 text-lg font-semibold text-center'>
                <li>Action:</li>
                <li>Product:</li>
                <li>Price:</li>
                <li>Quantity:</li>
                <li>Subtotal:</li>
              </ul>
              {cartData.length>0?cartData.map(item=>(
              <ul className='flex justify-between px-2 text-base font-medium py-5 border-b border-solid border-white'>
                  <li><button className='p-2 bg-black text-white border-white border border-solid text-white' onClick={()=>handleRemove(item)}><AiOutlineClose className='text-xl'/></button></li>
                  <li>{item.title} </li>
                  <li>{item.price}</li>
                  <li className='border border-solid border-white px-4 py-1'><button onClick={()=>handleDecrement(item)} className='mr-2 text-xl'>-</button >{item.quantity}<button onClick={()=>handleIncrement(item)} className='ml-2 text-lg'>+</button></li>
                  <li>{item.price*item.quantity}$</li>
              </ul>
                )):<h2 className='text-4xl font-medium h-full flex justify-center my-[300px]'>Cart is Empty</h2>}
                <h2 className='absolute bottom-0 right-0 p-5 text-3xl'>Total: {total}.00$</h2>
                
              
              </div>}
        </Container>
    </Section>
    </>
  )
}
