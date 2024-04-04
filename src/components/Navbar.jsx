import React, { useEffect, useState } from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import Listitem from './layer/Listitem'
import { FaBars } from "react-icons/fa";


const Navbar = () => {

    let [show, setShow] = useState(false)


    useEffect(()=>{

    function size (){
        if(window.innerWidth < 1024){
            setShow(false)
        }else{
            setShow(true)
        }
    }

    size();

    window.addEventListener("resize", size)

    },[])

    let oreb = ()=>{
        setShow(!show)
    }

  return (
    <nav className='bg-[#ffffff] py-5'>
        <Container className='flex items-center py-3 justify-between relative px-3 lg:px-0 '>
            <div className="logo">
                <Image href='/' src='src/assets/Logo.png' />
            </div>

            {
                show && (
                    <div className="menu_item py-7 px-4 lg:py-0 absolute lg:px-0 left-0 top-full bg-[#b4d3d4] lg:static lg:bg-transparent flex w-full justify-center z-50">
                      <ul className='flex items-center flex-col gap-y-2 lg:flex-row gap-x-[40px]'>
                         <Listitem className='hover:text-[#000]' href="/" text="Home"/>
                         <Listitem className='hover:text-[#000]' href="/" text="Shop"/>
                         <Listitem className='hover:text-[#000]' href="/" text="About"/>
                         <Listitem className='hover:text-[#000]' href="/" text="Contacts"/>
                        <Listitem className='hover:text-[#000]' href="/" text="Journal"/>
                </ul>
            </div>)
            }

            <FaBars onClick={oreb} className='lg:hidden' />



        </Container>
    </nav>
  )
}

export default Navbar
