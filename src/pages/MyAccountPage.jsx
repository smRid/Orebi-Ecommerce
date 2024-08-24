import React from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'
import SubHeading from '../components/SubHeading'

export default function MyAccountPage() {
  return (
    <Section>
        <Container>
        <SubHeading text='My Account' className='text-text49'/>
            <Flex className='items-center gap-x-1'>
             <p className=' text-xs text-third font-normal font-dm cursor-pointer'>
             <Link to='/'>Home</Link></p>  
             <FaAngleRight className=' text-xs text-third font-normal font-dm'/> 
            <p className='first-letter:uppercase text-xs text-third font-normal font-dm cursor-pointer'>{window.location.pathname.replace("/","").replace("-"," ")}</p>

            </Flex>
        </Container>
    </Section>
  )
}
