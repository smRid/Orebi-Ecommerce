import React from 'react'
import Container from './layer/Container'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram ,FaLinkedinIn } from "react-icons/fa";
import Image from './layer/Image';
import footerLogo from "../assets/footer_logo.png"


const Footer = () => {
  return (
    <div className='md:pt-14 pt-7 md:pb-[52px] pb-5 bg-[#F5F5F3] mt-[106px]'>
        <Container className='flex justify-between flex-wrap px-3 md:px-0'>
            <div className="left w-full md:w-auto ">
                <div className="flex lg:gap-x-36  justify-between">
                <ul>
                    <h4 className='font-DM font-bold text-base text-[#262626]' >MENU</h4>
                    <li>
                        <Link className='font-DM font-normal text-sm text-[#6D6D6D]'>Home</Link>
                    </li>
                    <li>
                        <Link className='font-DM font-normal text-sm text-[#6D6D6D]'>Shop</Link>
                    </li>
                    <li>
                        <Link className='font-DM font-normal text-sm text-[#6D6D6D]'>About</Link>
                    </li>
                    <li>
                        <Link className='font-DM font-normal text-sm text-[#6D6D6D]'>Contact</Link>
                    </li>
                    <li>
                        <Link className='font-DM font-normal text-sm text-[#6D6D6D]'>Journal</Link>
                    </li>
                </ul>
                <ul>
                    <h4 className='font-DM font-bold text-base text-[#262626]' >SHOP</h4>
                    <li>
                        <Link className='font-DM font-normal text-sm text-[#6D6D6D]'>Category 1</Link>
                    </li>
                    <li>
                        <Link className='font-DM font-normal text-sm text-[#6D6D6D]'>Category 2</Link>
                    </li>
                    <li>
                        <Link className='font-DM font-normal text-sm text-[#6D6D6D]'>Category 3</Link>
                    </li>
                    <li>
                        <Link className='font-DM font-normal text-sm text-[#6D6D6D]'>Category 4</Link>
                    </li>
                    <li>
                        <Link className='font-DM font-normal text-sm text-[#6D6D6D]'>Category 5</Link>
                    </li>
                </ul>
                <ul>
                    <h4 className='font-DM font-bold text-base text-[#262626]' >HELP</h4>
                    <li>
                        <Link className='font-DM font-normal text-sm text-[#6D6D6D]'>Privacy Policy</Link>
                    </li>
                    <li>
                        <Link className='font-DM font-normal text-sm text-[#6D6D6D]'>Terms & Conditions</Link>
                    </li>
                    <li>
                        <Link className='font-DM font-normal text-sm text-[#6D6D6D]'>Special E-shop</Link>
                    </li>
                    <li>
                        <Link className='font-DM font-normal text-sm text-[#6D6D6D]'>Shipping</Link>
                    </li>
                    <li>
                        <Link className='font-DM font-normal text-sm text-[#6D6D6D]'>Secure Payments</Link>
                    </li>
                </ul>
                <ul>
                    <h4 className='font-DM font-bold text-base text-[#111111]' to='tel:05587035165' ></h4>
                    <li>
                        <Link className='font-DM font-bold text-sm text-[#6D6D6D]' to='tel:(052) 611-5711'>(214)(052) 611-5711</Link>
                    </li>
                    <li>
                        <Link className='font-DM font-bold text-sm text-[#6D6D6D]' to="#">company@domain.com</Link>
                    </li>
                    
                    <li>
                        <Link className='font-DM font-normal text-sm text-[#6D6D6D]'>575 Crescent Ave. Quakertown, PA 18951</Link>
                    </li>
                </ul>
                
                </div>
                <div className="icon flex gap-x-6 md:mt-16 mt-5 mb-5 md:mb-0">
                    <FaFacebookF/>
                    <FaLinkedinIn />
                    <FaInstagram />
                </div>
            </div>
            <div className="right  flex flex-col justify-between">
                <Image className='hidden md:block' src={footerLogo}/>
                <p className='text-[#6D6D6D] md:text-sm text-xs font-DM'>2024 Orebi Minimal eCommerce Figma Template by Adveits</p>
            </div>
        </Container>
    </div>
  )
}
// HELP
// Privacy Policy
// Terms & Conditions
// Special E-shop
// Shipping
// Secure Payments

// SHOP
// Category 1
// Category 2
// Category 3
// Category 4
// Category 5

// MENU
// Home
// Shop
// About
// Contact
// Journal

export default Footer