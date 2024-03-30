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
    <nav className='bg-[#ffffff] py-3'>
        <Container className='flex items-center py-3 justify-between px-2 lg:px-0 relative'>
            <div className="logo">
                <Image href='/' src='src/assets/logo.png'/>
            </div>

            {
                show && (
                    <div className="menu py-7 px-4 lg:py-0 absolute lg:px-0 left-0 top-full bg-slate-200 lg:static lg:bg-transparent flex w-full justify-center ">
                      <ul className='flex items-center flex-col gap-y-2 lg:flex-row gap-x-[40px]'>
                         <Listitem href="/" text="Home"/>
                         <Listitem href="/" text="Shop"/>
                         <Listitem href="/" text="About"/>
                         <Listitem href="/" text="Contacts"/>
                        <Listitem href="/" text="Journal"/>
                </ul>
            </div>)
            }

            <FaBars onClick={oreb} className='lg:hidden' />



        </Container>
    </nav>
  )
}

export default Navbar


 