import React from 'react'

import Section from '../components/Section'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'


import Product from '../components/Product'
import product1 from '../assets/product1.png'
import product13 from '../assets/product13.png'
import { useSelector } from 'react-redux'
import Image from '../components/Image'
import Button from '../components/Button'
export default function AboutPage() {
    let data=useSelector((state)=>(state.breadcrumb.previousName))

  return (
    <Section className='py-32'>
        <Container>
            <SubHeading text='About' className='text-text49'/>
            <Flex className='items-center gap-x-1'>
             <p className=' text-xs text-third font-normal font-dm cursor-pointer'>
             <Link to={data=="Home"?'/':`/${data}`}>{data}</Link></p>  
             <FaAngleRight className=' text-xs text-third font-normal font-dm'/> 
            <p className='first-letter:uppercase text-xs text-third font-normal font-dm cursor-pointer'>{window.location.pathname.replace("/","")}</p>
            </Flex >
            <Flex className='justify-between mb-32 mt-36'>
                <div className='w-780 relative'><Image src={product1} className='w-full'/>
                <Button text='Our Brands' className='absolute bottom-[80px] left-1/2 -translate-x-1/2'/>
                </div>
                <div className='w-780 relative'><Image src={product13} className='w-full'/>
                <Button text='Our Stores' className='absolute bottom-[80px] left-1/2 -translate-x-1/2'/>
                </div>
               
            
            </Flex>
            <SubHeading className='font-normal pb-28'  text='Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.'/>
             <Flex className='justify-between'>
             <div>
                <h4 className='text-primary text-text25 font-dm font-bold pb-3'>Our Vision</h4>
                <p className='text-secondary text-base font-dm font-normal w-506 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div>
                <h4 className='text-primary text-text25 font-dm font-bold pb-3'>Our Story</h4>
                <p className='text-secondary text-base font-dm font-normal w-506 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic..</p>
            </div>
            <div>
                <h4 className='text-primary text-text25 font-dm font-bold pb-3'>Our Brands</h4>
                <p className='text-secondary text-base font-dm font-normal w-506 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            </div>
             </Flex>
        </Container>
    </Section>
  )
}
