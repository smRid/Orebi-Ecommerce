import React from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import Image from '../components/Image'
import body from '../assets/BODY.png'

export default function ProductsPage() {
  let data=useSelector((state)=>(state.breadcrumb.previousName))
  return (
    <Section className='py-28'>
        <Container>
        <SubHeading text="Products" className='text-text49'/>
            <Flex className='items-center gap-x-1'>
             <p className=' text-xs text-third font-normal font-dm cursor-pointer'>
             <Link to={data=="Home"?'/':`/${data}`}>{data}</Link></p>  
             <FaAngleRight className=' text-xs text-third font-normal font-dm'/> 
            <p className='first-letter:uppercase text-xs text-third font-normal font-dm cursor-pointer'>{window.location.pathname.replace("/","")}</p>

            </Flex>
            <Image src={body}/>
        </Container>
    </Section>
  )
}
