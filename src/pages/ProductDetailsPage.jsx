import React, { useState } from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import Flex from '../components/Flex'
import { FaAngleRight } from 'react-icons/fa'
import Image from '../components/Image'
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
import product4 from '../assets/product4.png'
import SubHeading from '../components/SubHeading'
import {AiOutlineStar,AiFillStar,AiOutlinePlus} from 'react-icons/ai'
import {BsFillCircleFill,BsFillStarFill} from 'react-icons/bs'
import Button from '../components/Button'

export default function ProductDetailsPage() {
  let [feature,setFeature]=useState(false)
  let [shopping,setShopping]=useState(false)
  let [star1,setStar1]=useState(true)
  let [star2,setStar2]=useState(true)
  let [star3,setStar3]=useState(true)
  let [star4,setStar4]=useState(false)
  let [star5,setStar5]=useState(false)
  let [star6,setStar6]=useState(true)
  let [star7,setStar7]=useState(true)
  let [star8,setStar8]=useState(true)
  let [star9,setStar9]=useState(false)
  let [star10,setStar10]=useState(false)
  let [count,setCount]=useState(0)

  let handleSumit=(e)=>{
    // e.preventDefault()
  }
  
  return (
    <Section className=' py-32'>
        <Container>
        <SubHeading text="Product" className='text-text49'/>
        <Flex className='items-center gap-x-1'>
             <p className=' text-xs text-third font-normal font-dm cursor-pointer'>
              <Link to='/'>Home</Link></p>  
             <FaAngleRight className=' text-xs text-third font-normal font-dm'/> 
            <p className='first-letter:uppercase text-xs text-third font-normal font-dm cursor-pointer'>{window.location.pathname.replace("/","")}</p>

            </Flex>
            <Flex  className='flex-wrap justify-between gap-y-10 pt-36 pb-12'>
              <Image src={product1} className='w-780 '/>
              <Image src={product2} className='w-780 '/>
              <Image src={product3} className='w-780 '/>
              <Image src={product4} className='w-780 '/>
              
            </Flex>
            {/* Product Review start */}
            <SubHeading text="Product"/>
            <Flex className='gap-x-4 items-center py-4'>
              <Flex className='gap-x-0.5'>
                
              <BsFillStarFill onClick={()=>{setStar1(!star1)}} className={`text-xs  ${star1&& "text-yellow-500"}`}/>
              <BsFillStarFill onClick={()=>{setStar2(!star2)}} className={`text-xs  ${star2&& "text-yellow-500"}`}/>
              <BsFillStarFill onClick={()=>{setStar3(!star3)}} className={`text-xs  ${star3&& "text-yellow-500"}`}/>
              <BsFillStarFill onClick={()=>{setStar4(!star4)}} className={`text-xs  ${star4&& "text-yellow-500"}`}/>
              <BsFillStarFill onClick={()=>{setStar5(!star5)}} className={`text-xs  ${star5&& "text-yellow-500"}`}/>
              
              </Flex>
              <p className='text-sm text-secondary font-dm font-normal'>1 Review</p>
            </Flex>
            <div className=' w-780 flex gap-x-4 items-center pb-6 mb-7 border-b border-solid border-six'>
              <p className='text-base text-secondary font-dm font-normal line-through'>$88.00</p>
              <p className='text-xl text-primary font-dm font-bold'>$44.00</p>
            </div>
            {/* Product Review end */}
          

            {/* Color start */}
            <div className=' w-780 gap-x-4 pb-6 mb-7 border-b border-solid border-six'>
            <Flex className='items-center gap-x-14 pb-8'>
            <h4 className='text-base text-primary font-dm font-bold'>COLOR:</h4>
            <Flex className='gap-x-3'>
              <BsFillCircleFill className='text-xl text-green-300'/>
              <BsFillCircleFill className='text-xl text-blue-300'/>
              <BsFillCircleFill className='text-xl text-red-300'/>
              <BsFillCircleFill className='text-xl text-yellow-300'/>
              <BsFillCircleFill className='text-xl text-purple-300'/>
            </Flex>
            </Flex>

            <Flex className='items-center gap-x-20 pb-8'>
            <h4 className='text-base text-primary font-dm font-bold'>SIZE:</h4>
            <select className='px-4 py-2 border border-solid w-[160px] text-lg'>
              <option value="">S</option>
              <option value="">L</option>
              <option value="">M</option>
              <option value="">XL</option>
              <option value="">XXl</option>
            </select>
            </Flex>

            <Flex className='items-center gap-x-8 '>
            <h4 className='text-base text-primary font-dm font-bold'>QUANTITY:</h4>
            <div className=' flex justify-between px-4 py-2 border border-solid w-[160px]'>
              <button className='text-xl'>-</button>
              <span>1</span>
              <button className='text-lg'>+</button>
            </div>
            </Flex>
            </div>
            {/* Color and */}
            
            <Flex className='w-780 gap-x-4  mb-7 border-b border-solid border-six items-center gap-x-7 pb-8'>
            <h4 className='text-base text-primary font-dm font-bold'>STATUS:</h4>
            <p className='text-base text-secondary font-dm font-normal'>In stock</p>
            </Flex>
            
            <Flex className='w-780 gap-x-5  border-b border-solid border-six items-center gap-x-7 pb-8'>
            <Button text="Add to Wish List"/>
            <Button text="Add to Cart"/>
            </Flex>

            <div className='w-780 border-b border-solid border-six py-8'>
            <Flex className=' flex justify-between items-center gap-x-7 pb-5'>
            <h4 className='text-base text-primary font-dm font-bold'>FEATURES  & DETAILS</h4>
            <button onClick={()=>{setFeature(!feature)}} className='text-xl font-bold'>{`${feature?"-":"+"}`}</button>
            </Flex>
            {feature&&<p className='text-base text-secondary font-md font-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quod commodi ipsam asperiores placeat at maiores ex tempora et necessitatibus?</p>}
            </div>

            <div className='w-780 border-b border-solid border-six py-8 mb-28'>
            <Flex className=' flex justify-between items-center gap-x-7 pb-5'>
            <h4 className='text-base text-primary font-dm font-bold'>SHIPPING & RETURNS</h4>
            <button onClick={()=>{setShopping(!shopping)}} className='text-xl font-bold'>{`${feature?"-":"+"}`}</button>
            </Flex>
            {shopping&&<p className='text-base text-secondary font-md font-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quod commodi ipsam asperiores placeat at maiores ex tempora et necessitatibus?</p>}
            </div>
            {/* Description part start */}
            <div className='pb-4 border-b border-solid border-six'>
              <Flex className='gap-x-16 mb-10'>
                <h3 className='text-xl taxt-secondary font-normal font-dm'>Description</h3>
                <h3 className='text-xl taxt-primary font-bold font-dm'>Reviews ({count})</h3>
              </Flex>
              <p className='text-base text-secondary font-normal font-dm'>1 review for Product</p>
            </div>
            {/* Description part emd */}

            {/* Review part start */}
            <div className='pb-4 pt-6 border-b border-solid border-six'>
              <Flex className='gap-x-16 mb-4 items-center'>
                <h3 className='text-xl taxt-secondary font-normal font-dm'>John Ford</h3>
                <Flex className='gap-y-0.5'>
                <BsFillStarFill onClick={()=>{setStar6(!star6)}} className={`text-xs  ${star6&& "text-yellow-500"}`}/>
              <BsFillStarFill onClick={()=>{setStar7(!star7)}} className={`text-xs  ${star7&& "text-yellow-500"}`}/>
              <BsFillStarFill onClick={()=>{setStar8(!star8)}} className={`text-xs  ${star8&& "text-yellow-500"}`}/>
              <BsFillStarFill onClick={()=>{setStar9(!star9)}} className={`text-xs  ${star9&& "text-yellow-500"}`}/>
              <BsFillStarFill onClick={()=>{setStar10(!star10)}} className={`text-xs  ${star10&& "text-yellow-500"}`}/>
              </Flex>
              </Flex>
              <p className='text-base text-secondary font-normal font-dm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            {/* Review part emd */}

            {/* Review Add part start */}
            <div>
              <h4 className='text-xl taxt-primary font-bold font-dm py-12'>Add a Review</h4>

              <form onSubmit={handleSumit} action="">
                <div className='w-780 border-b border-solid border-six '>
                  <label className='text-base text-primary font-bold font-dm mb-2 block' htmlFor="name">Name:</label>
                  <input id="name" className='w-full py-2' type="text" placeholder='Your name here'/>
                </div>
                <div className='w-780 border-b border-solid border-six '>
                  <label className='text-base text-primary font-bold font-dm mb-2 mt-5 block' htmlFor="email">Email:</label>
                  <input id="email" className='w-full py-2' type="text" placeholder='Your name Email'/>
                </div>
                <div className='w-780 border-b border-solid border-six '>
                  <label className='text-base text-primary font-bold font-dm mb-2 mt-5 block' htmlFor="review">Review:</label>
                  <textarea id="review" className='w-full pt-2 pb-10' type="text" placeholder='Your name review'/>
                </div>
                <Button type="Submit" text="Post" className='mt-6'/>
              </form>
              
            </div>
            {/* Review Add part emd */}

           
        </Container>
    </Section>
  )
}
