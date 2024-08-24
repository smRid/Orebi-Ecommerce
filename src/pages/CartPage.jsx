import React from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import { Link } from 'react-router-dom'
import Flex from '../components/Flex'
import { FaAngleRight } from 'react-icons/fa'

export default function CartPage() {
  return (
    <Section>
        <Container>
        <SubHeading text="Cart" className='text-text49'/>
             <Flex className='items-center gap-x-1'>
              <p className=' text-xs text-third font-normal font-dm cursor-pointer'>
               <Link to='/'>Home</Link></p>  
              <FaAngleRight className=' text-xs text-third font-normal font-dm'/> 
             <p className='first-letter:uppercase text-xs text-third font-normal font-dm cursor-pointer'>{window.location.pathname.replace("/","")}</p>

             </Flex>
        </Container>
    </Section>
  )
}
