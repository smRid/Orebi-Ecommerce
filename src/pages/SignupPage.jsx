import React from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import Input2 from '../components/Input2'
import { FaAngleRight } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function SignupPage() {
    let data=useSelector((state)=>(state.breadcrumb.currentName))
  return (
    <Section className='py-32'>
        <Container>
            <SubHeading text='Sign up' className='text-text49'/>
            <Flex className='items-center gap-x-1'>
             <p className=' text-xs text-third font-normal font-dm cursor-pointer'>
              <Link to={data=="Home"?'/':`/${data}`}>{data}</Link>  </p>  
             <FaAngleRight className=' text-xs text-third font-normal font-dm'/> 
            <p className='first-letter:uppercase text-xs text-third font-normal font-dm cursor-pointer'>{window.location.pathname.replace("/","").replace("-"," ")}</p>

            </Flex>
            <p className='w-644 text-primary text-base font-dm font-normal pt-32 pb-14'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            <div className='border-t border-solid border-six'>
                <SubHeading text="Your Personal Details" className='pt-14 pb-10'/>
                
            <div className='flex flex-wrap gap-x-10'>
                    <div className='w-4/12 pb-6'>
                    <label className='text-primary text-base font-dm font-bold' htmlFor="firstName">First Name</label>
                    <Input2 placeholder='First Name' id="firstName"/>
                    </div>
                    <div className='w-4/12 pb-6'>
                    <label className='text-primary text-base font-dm font-bold' htmlFor="lastName">Last Name</label>
                    <Input2 placeholder='Last Name' id="lastName"/>
                    </div>
                    <div className='w-4/12'>
                    <label className='text-primary text-base font-dm font-bold' htmlFor="email">Email address</label>
                    <Input2 placeholder='company@domain.com' id="email"/>
                    </div>
                    <div className='w-4/12'>
                    <label className='text-primary text-base font-dm font-bold' htmlFor="telephone">Telephone</label>
                    <Input2 placeholder='Your phone number' id="telephone"/>
                    </div>
            </div>
            </div>
            <div className='border-t border-solid border-six mt-16'>
                <SubHeading text="New Customer" className='pt-14 pb-10'/>
                
                <div className='flex flex-wrap gap-x-10'>
                    <div className='w-4/12 pb-6'>
                    <label className='text-primary text-base font-dm font-bold' htmlFor="address1">Address 1</label>
                    <Input2 placeholder='4279 Zboncak Port Suite 6212' id="address1"/>
                    </div>
                    <div className='w-4/12 pb-6'>
                    <label className='text-primary text-base font-dm font-bold' htmlFor="address2">Address 2</label>
                    <Input2 placeholder='-' id="address2"/>
                    </div>
                    <div className='w-4/12 pb-6'>
                    <label className='text-primary text-base font-dm font-bold' htmlFor="city">City</label>
                    <Input2 placeholder='Your city' id="city"/>
                    </div>
                    <div className='w-4/12 pb-6'>
                    <label className='text-primary text-base font-dm font-bold' htmlFor="postCode">Post Code</label>
                    <Input2 placeholder='05228' id="postCode"/>
                    </div>
                    <div className='w-4/12'>
                    <label className='text-primary text-base font-dm font-bold' htmlFor="divition">Division</label>
                    <Input2 placeholder='Please select' id="divition"/>
                    </div>
                    <div className='w-4/12'>
                    <label className='text-primary text-base font-dm font-bold' htmlFor="district">District</label>
                    <Input2 placeholder='Please select' id="district"/>
                    </div>
                </div>
                
            </div>
            <div className='border-t border-solid border-six mt-16'>
                <SubHeading text="Your Password" className='pt-14 pb-10'/>
                
                <div className='flex flex-wrap gap-x-10'>
                    <div className='w-4/12'>
                    <label className='text-primary text-base font-dm font-bold' htmlFor="password">Password</label>
                    <Input2 placeholder='Password' id="password"/>
                    </div>
                    <div className='w-4/12'>
                    <label className='text-primary text-base font-dm font-bold' htmlFor="repeatPassword">Repeat Password</label>
                    <Input2 placeholder='Repeat password' id="repeatPassword"/>
                    </div>
                    
                </div>
                
            </div>

          <div className='border-t border-solid border-six mt-16 pt-16 flex items-center'>
          <input id='text' type="checkbox" hidden className='peer/text'/>
            <label htmlFor="text" className='relative ml-7
            before:absolute before:top-[5px] before:-left-[28px] before:w-3 before:h-3 before:border after:border-solid
            before:border-primary

             after:absolute after:top-[8px] after:-left-[25px] after:w-[7px] after:h-[7px] after:peer-checked/text:bg-primary text-sm text-secondary font-normal font-dm '>I have read and agree to the Privacy Policy</label>
          </div>

          <Flex  className='gap-x-8 py-6'>
            <p className='text-secondary text-sm font-normal font-dm'>Subscribe Newsletter</p>
          <div className=' flex items-center'>
          <input id='yes' type="checkbox" hidden className='peer/yes'/>
            <label htmlFor="yes" className='relative ml-7
            before:absolute before:top-[5px] before:-left-[28px] before:w-3 before:h-3 before:border after:border-solid
            before:border-primary

             after:absolute after:top-[8px] after:-left-[25px] after:w-[7px] after:h-[7px] after:peer-checked/yes:bg-primary text-sm text-secondary font-normal font-dm '>Yes</label>
          </div>
          <div className=' flex items-center'>
          <input id='no' type="checkbox" hidden className='peer/no'/>
            <label htmlFor="no" className='relative ml-7
            before:absolute before:top-[5px] before:-left-[28px] before:w-3 before:h-3 before:border after:border-solid
            before:border-primary

             after:absolute after:top-[8px] after:-left-[25px] after:w-[7px] after:h-[7px] after:peer-checked/no:bg-primary text-sm text-secondary font-normal font-dm '>No</label>
          </div>

          </Flex>
          <Button text='Log in'/>
            
        </Container>
    </Section>
  )
}
