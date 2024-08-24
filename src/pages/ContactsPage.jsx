import React from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'
import Input2 from '../components/Input2'
import Button from '../components/Button'
import Image from '../components/Image'
import location from '../assets/location.png'
import { useSelector } from 'react-redux'

export default function ContactsPage() {
     let data=useSelector((state)=>state.breadcrumb.previousName)
  return (
    <Section className='pb-36 pt-32'>
        <Container>
        <SubHeading text="Contacts" className='text-text49'/>
             <Flex className='items-center gap-x-1'>
              <p className=' text-xs text-third font-normal font-dm cursor-pointer'>
              <Link to={data=="Home"?'/':`/${data}`}>{data}</Link></p>  
              <FaAngleRight className=' text-xs text-third font-normal font-dm'/> 
             <p className='first-letter:uppercase text-xs text-third font-normal font-dm cursor-pointer'>{window.location.pathname.replace("/","")}</p>

             </Flex>
           <SubHeading text="Fill up a Form" className='pb-10 pt-32'/>

           <div className='flex flex-wrap '>
           <div className='w-8/12 pb-6'>
                <label className='text-primary text-base font-dm font-bold' htmlFor="name">Name</label>
                <Input2 placeholder='Your name here' id="name"/>
           </div>
           <div className='w-8/12 pb-6'>
                <label className='text-primary text-base font-dm font-bold' htmlFor="email">Email</label>
                <Input2 placeholder='Your email here' id="email"/>
           </div>
           <div className='w-8/12 pb-7'>
                <label className='text-primary text-base font-dm font-bold' htmlFor="massage">Message</label>
                <Input2 placeholder='Your message here' id="massage" className='pb-20'/>
           </div>
          </div>
          <Button text='Post' className='mb-36'/>
          <Image src={location} alt={location}/>

        </Container>
    </Section>
  )
}
