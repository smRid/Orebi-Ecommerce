import React from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'
import Input2 from '../components/Input2'
import Button from '../components/Button'

export default function CheckoutPage() {
  return (
    <Section className='pb-36 pt-32'>
        <Container>
            <SubHeading text="Checkout" className='text-text49'/>
            <Flex className='items-center gap-x-1'>
             <p className=' text-xs text-third font-normal font-dm cursor-pointer'>
              <Link to='/'>Home</Link></p>  
             <FaAngleRight className=' text-xs text-third font-normal font-dm'/> 
            <p className='first-letter:uppercase text-xs text-third font-normal font-dm cursor-pointer'>{window.location.pathname.replace("/","")}</p>

            </Flex>
            <p className='text-sm text-secondary font-dm font-normal mt-32 mb-28'>Have a coupon?<Link><span className='text-base text-primary font-dm font-normal cursor-pointer'> Click here to enter your code</span></Link></p>

            <SubHeading text="Billing Details" className='pb-10'/>

            <div className='flex flex-wrap mb-32'>
                    <div className='w-4/12 pb-6 pr-10'>
                    <label className='text-primary text-base font-dm font-bold' htmlFor="firstName">First Name *</label>
                    <Input2 placeholder='First Name' id="firstName"/>
                    </div>
                    <div className='w-4/12 pb-6 '>
                    <label className='text-primary text-base font-dm font-bold' htmlFor="lastName">Last Name *</label>
                    <Input2 placeholder='Last Name' id="lastName"/>
                    </div>
                    <div className='w-8/12 pb-6'>
                    <label className='text-primary text-base font-dm font-bold' htmlFor="company">Companye Name (optional)</label>
                    <Input2 placeholder='Company Name' id="company"/>
                    </div>

                    <div className='w-8/12 pb-6'>
                    <label className='text-primary text-base font-dm font-bold' htmlFor="countreis">Country *</label>
                    <Input2 placeholder='Please select' id="countreis"/>
                    </div>
                    <div className='w-8/12 pb-6'>
                    <label className='text-primary text-base font-dm font-bold' htmlFor="address">Street Address *</label>
                    <Input2 placeholder='House number and street name' id="address"/>
                    </div>

                    <div className='w-8/12 pb-6'>
                    <label className='text-primary text-base font-dm font-bold' htmlFor="city">Town/City *</label>
                    <Input2 placeholder='Town/City' id="city"/>
                    </div>

                    <div className='w-8/12 pb-6'>
                    <label className='text-primary text-base font-dm font-bold' htmlFor="countay">County (optional)</label>
                    <Input2 placeholder='County' id="countay"/>
                    </div>

                    <div className='w-8/12 pb-6'>
                    <label className='text-primary text-base font-dm font-bold' htmlFor="postCode">Post Code *</label>
                    <Input2 placeholder='Post Code' id="postCode"/>
                    </div>
                    <div className='w-8/12 pb-6'>
                    <label className='text-primary text-base font-dm font-bold' htmlFor="phone">Phone *</label>
                    <Input2 placeholder='Phone' id="phone"/>
                    </div>
                    <div className='w-8/12 '>
                    <label className='text-primary text-base font-dm font-bold' htmlFor="email">Email Address *</label>
                    <Input2 placeholder='Email' id="email"/>
                    </div>
            </div>
            <SubHeading text='Additional Information'className='pb-10'/>
            <div className='flex flex-wrap'>
                    <div className='w-8/12 '>
                    <label className='text-primary text-base font-dm font-bold' htmlFor="note">Other Notes (optional)</label>
                    <Input2 placeholder='Notes about your order, e.g. special notes for delivery.' id="note" className='pb-20'/>
                    </div>
            </div>
            <Button text='Proceed to Bank' className='mt-10'/>
        </Container>
    </Section>
  )
}
