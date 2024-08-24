import React, { useEffect, useState } from 'react'
import Container from '../layer/Container'
import Breadcrumb from '../layer/Breadcrumb'
import Title from '../layer/Title'
import Input from '../layer/Input'
import { FaMinus, FaPlus, FaStar } from 'react-icons/fa'

import Image from '../layer/Image'
import Button from '../layer/Button'
import s1 from '../../assets/s1.svg'
import s2 from '../../assets/s2.svg'
import s3 from '../../assets/s3.svg'
import s4 from '../../assets/s4.svg'
import s5 from '../../assets/s5.svg'
import Slider from 'react-slick'


import item01 from "../../assets/p1.jpg";
import item02 from "../../assets/p2.jpg";
import item03 from "../../assets/p3.jpg";
import item04 from "../../assets/p4.jpg";


const ProductInside = () => {

  let [show, setShow] = useState (false)
  let [show2, setShow2] = useState (false)
  let [show3, setShow3] = useState (false)
  let [show4, setShow4] = useState (false)

  let [isActive, setIsActive] = useState(false);

  let toggleActive = () => {
    setIsActive(!isActive);
  };

  let [isActive2, setIsActive2] = useState (false);

  let toggleActive2 = ()=> {
    setIsActive2 (!isActive2)
  }

  let [number, setNumber] = useState(1)



  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
        <div>
            <ul className='flex gap-x-5 mt-5'> {dots} </ul>
        </div>
    ),
    customPaging: i => (
        <div
            className="lg:w-[120px] w-10 lg:h-[120px] h-10 bg-cover cursor-pointer"
            style={{ backgroundImage: `url(${[item01, item02, item03, item04][i]})` }}
        >
        </div>
    )
};


  return (
    <div>
        <Container className={`px-3 lg:px-0`}> 
            <Breadcrumb className="!text-base"/>

                <div className='lg:w-[700px] w-[320px] lg:h-[700px] h-[320px] lg:mt-32 mt-8'>
                    <Slider  {...settings}>
                        <div className='lg:w-[700px] w-[320px] lg:h-[500px] h-[220px]'>
                            <Image className='lg:w-[700px] w-[320px] lg:h-[500px] h-[220px] object-cover' src={item01} alt="item01" />
                        </div>
                        
                        <div className='lg:w-[700px] w-[320px] lg:h-[500px] h-[220px]'>
                            <Image className='lg:w-[700px] w-[320px] lg:h-[500px] h-[220px] object-cover' src={item02} alt="item01" />
                        </div>
                        
                        <div className='lg:w-[700px] w-[320px] lg:h-[500px] h-[220px]'>
                            <Image className='lg:w-[700px] w-[320px] lg:h-[500px] h-[220px] object-cover' src={item03} alt="item01" />
                        </div>
                        
                        <div className='lg:w-[700px] w-[320px] lg:h-[500px] h-[220px]'>
                            <Image className='lg:w-[700px] w-[320px] lg:h-[500px] h-[220px] object-cover' src={item04} alt="item01" />
                        </div>
                        
                    </Slider>
                </div>


            <div className='lg:w-[782px]'>
                <Title text="Product"/>
                <div className="review mt-[18px] flex gap-x-[25px]">
                  <div className="icon text-[#FFD881] w-[70px] h-3 flex">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                  </div>
                  
                    <p className="text-sm font-normal text-[#767676]">1 Review</p>
                  
                </div>

                <div className='flex items-center my-6 gap-x-6'>
                  <p className='line-through lg:text-base text-sm text-[#767676] font-normal'>$88.00</p>
                  <p className='text-[#262626] font-bold lg:text-xl text-base'>$44.00</p>
                </div>
                <p className='border-b border-[#F0F0F0] lg:mb-7 mb-3 w-[320px] lg:w-full'></p>

                <div className='flex gap-x-14 items-center'>
                  <p className='lg:text-base text-xs font-bold lg:leading-6 leading-4'>COLOR:</p>
                  <div className='flex items-center gap-x-4'>
                    <Image src={s1}/>
                    <Image src={s2}/>
                    <Image src={s3}/>
                    <Image src={s4}/>
                    <Image src={s5}/>
                  </div>
                </div>


                <div className='mt-8'>
                <label className='font-DM font-bold lg:text-base text-sm leading-7 text-[#262626] lg:mr-[76px]' >

                <span className="mr-8 lg:text-base text-xs font-bold lg:leading-6 leading-4 ">SIZE:</span>
                </label>
                <select className='lg:w-[139px] lg:h-9 py-1 lg:px-5 px-1 lg:text-base text-sm leading-7 outline-none border border-[#F0F0F0] bg-transparent text-[#767676] cursor-pointer'>

                <option className='p-7'value="S">
                S</option>

                <option className='p-7'value="M">
                M</option>

                <option className='p-7'value="L">
                L</option>

                <option className='p-7'value="XL">
                XL</option>

                </select>
                </div>

               
                <p className='flex  items-center gap-x-8   py-[30px] border-b border-[#F0F0F0] w-[320px] lg:w-full lg:text-base text-xs font-bold lg:leading-6 leading-4'>QUANTITY:

                  <div className='flex items-center border cursor-pointer'>
                  <div
                     onClick={()=> number<=1 ? setNumber(1):setNumber(--number)} className='lg:w-14 lg:h-8 w-8 h-6 flex items-center justify-center'>
                      <FaMinus />
                    </div>
                    <p className='lg:w-14 lg:h-8 w-8 h-6 flex items-center justify-center'>{number}</p>
                    <div 
                    onClick={()=> setNumber(++number)} className='lg:w-14 lg:h-8 w-8 h-6 flex items-center justify-center'><FaPlus/></div>
                    
                  </div>

                </p>
                 

                <div className='flex items-center gap-x-7 border-b border-[#F0F0F0] w-[320px] lg:w-full'>
                  <p className='lg:text-base text-xs font-bold lg:leading-6 leading-4 my-[30px]'>STATUS:</p>
                  
                  <p className="text-sm font-normal text-[#767676]">In stock</p>
                </div>

                <div className='mt-8 flex gap-x-5 items-center border-b border-[#F0F0F0] pb-[30px] w-[320px] lg:w-full'>
                  <Button className="lg:py-4 py-2 lg:w-[200px] w-[130px] lg:text-base text-[10px] " text="Add to Wish List"/>
                  <Button to={'/cart'} className="lg:py-4 py-2 lg:w-[200px] w-[130px] lg:text-base text-[10px] " text="Add to Cart"/>
                </div>



                <div onClick={()=> setShow3 (!show3)} className='flex justify-between items-center relative cursor-pointer w-[320px] lg:w-full'>
                <p className='lg:text-base text-xs font-bold lg:leading-6 leading-4 lg:py-[30px] py-4 border-b border-[#F0F0F0] w-[320px] lg:w-full'>FEATURES  & DETAILS</p>


                <FaPlus className={`absolute top-1/2 transition-all duration-500 translate-y-[-50%] right-0 ${show3? "opacity-0 invisible":"opacity-100 visible rotate-90"}`}/> <FaMinus className={`absolute top-1/2 translate-y-[-50%] right-0 ${show3? "opacity-100 visible":"opacity-0 invisible"}`}/>
                </div>

                <p className={`text-sm font-normal text-[#767676] mt-5 transition-all duration-300 border-b border-[#F0F0F0] pb-7 w-[320px] lg:w-full ${show3? "static": "absolute translate-x-[-100%] invisible"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                </p>


                <div onClick={()=> setShow4 (!show4)} className='flex w-[320px] lg:w-full justify-between items-center cursor-pointer relative'>
                <p className='lg:text-base text-xs font-bold lg:leading-6 leading-4 lg:py-[30px] py-4 border-b border-[#F0F0F0] w-[320px] lg:w-full'>SHIPPING & RETURNS</p>


                <FaPlus className={`absolute top-1/2 transition-all duration-500 translate-y-[-50%] right-0 ${show4? "opacity-0 invisible":"opacity-100 visible rotate-90"}`}/> <FaMinus className={`absolute top-1/2 translate-y-[-50%] right-0 ${show4? "opacity-100 visible":"opacity-0 invisible"}`}/>
                </div>




                <p className={`text-sm font-normal text-[#767676] mt-5 transition-all duration-300 border-b border-[#F0F0F0] pb-7 w-[320px] lg:w-full ${show4? "static": "absolute translate-x-[-100%] invisible"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
               



            </div>



            <div className='lg:mt-[123px] mt-10'>



              <div className='flex  gap-x-16 relative'>

                <div onClick={toggleActive} className={` ${isActive ? 'active !text-[#262626] font-bold' : ''}`}>

                <h5 
                 onClick={ ()=> setShow (!show)} className={`text-xl  leading-7 cursor-pointer  transition-all duration-300 `}>Description</h5>
              

                </div>

                <div onClick={toggleActive2} className={` ${isActive2 ? 'active !text-[#262626] font-bold' : ''}`}>

                <h5 
                  onClick={()=> setShow2(!show2)} 
                  className={`text-xl  leading-7 cursor-pointer  transition-all duration-300 `}>Reviews (1)</h5>
              

                </div>


              </div>



              <p className={` bg-[#1e1e1e] text-[#f6f0f0]  max-w-[600px] w-[320px] lg:w-full lg:mt-10 mt-5 ${show? "opacity-100 visible z-10" : " opacity-0 hidden"}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia eum exercitationem assumenda odit. Ut minima saepe unde aperiam eveniet voluptatibus enim perferendis temporibus, illo libero neque quis velit atque itaque quia molestias fuga cupiditate expedita ipsum, vitae alias explicabo, odio officiis. Amet facilis ex magnam odit hic tenetur? Cumque eligendi laborum ipsum voluptatibus repellat commodi! Totam libero voluptate neque nulla laboriosam illum dicta numquam nihil optio necessitatibus, qui nemo pariatur odit incidunt quasi itaque corporis aperiam amet nam dignissimos laudantium quaerat. Quod illum fugit labore magni doloremque obcaecati, voluptatibus quos dolore beatae assumenda quibusdam quas voluptates nesciunt voluptatum, aut nemo.</p>




              {
                show2 && (
                  <div className=''>
                  <p className='text-sm text-[#767676] leading-8 mt-[42px] border-b border-[#F0F0F0] pb-4'>1 review for Product</p>
  
                  <div className='flex items-center gap-x-9 mt-8'>
                    <p className='text-[#262626] text-base leading-8'>John Ford</p>
  
                    <div className="icon text-[#FFD881] w-[70px] h-3 flex">
                      
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
  
                    </div>
                    
                  </div>
  
                  <p className='mt-4 pb-4 border-b border-[#F0F0F0] text-sm lg:text-base'>Lorem Ipsum is simply dummy text of the    printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  </p>
  
                  <div className='max-w-[780px] lg:mt-14 mt-8 flex flex-col lg:gap-y-6 gap-y-3'>
                    <Title className="!text-xl lg:mb-12" text="Add a Review"/>
  
                    <Input className="!w-full" text="Name" type="text" placeholder="Your name here"/>
  
                    <Input className="!w-full" text="Email" type="text" placeholder="Your email here"/>
  
                    <div>
                      <h3 className='text-base font-bold leading-6 '>Review</h3>
                      <input type="text" placeholder='Your review here' className='w-full lg:pt-[10px] lg:pb-[87px] pb-2 py-1 outline-none border-b border-[#F0F0F0]' />
                  </div>
  
  
  
                    <Button className="lg:w-[200px] w-[120px] lg:py-4 py-2" text="Post"/>
                  </div>
  
  
  
  
                </div>
                )
              }




















            </div>







































        </Container>
    </div>
  )
}

export default ProductInside