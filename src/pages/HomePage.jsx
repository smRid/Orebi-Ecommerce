import React, { useEffect, useState } from 'react'

import Section from '../components/Section'
import Container from '../components/Container'
import banner from '../assets/banner.png'
import Image from '../components/Image'
import Flex from '../components/Flex'
import SubHeading from '../components/SubHeading'
import { Link } from 'react-router-dom'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import PrevArrows from '../components/PrevArrows'
import NextArrows from '../components/NextArrows'

import ad1 from '../assets/ad1.png'
import ad2 from '../assets/ad2.png'
import ad3 from '../assets/ad3.png'
import add2 from '../assets/add2.png'
import Product from '../components/Product'
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
import product4 from '../assets/product4.png'
import product5 from '../assets/product5.png'
import product6 from '../assets/product6.png'
import product7 from '../assets/product7.png'
import product8 from '../assets/product8.png'
import product9 from '../assets/product9.png'
import product10 from '../assets/product10.png'
import product11 from '../assets/product11.png'
import product12 from '../assets/product12.png'
import axios from 'axios'



export default function HomePage() {
  let [bannerimage,setBannerImage]=useState("")
  let [facility,setFacility]=useState("")
  let [add,setAdd]=useState("")
  let [newarrival,setNewarrival]=useState("")
  let [bestseller,setBestSeller]=useState("")
  let [year,setYear]=useState("")
  let [secialOffer,setSecialOffer]=useState("")

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrows />,
    nextArrow: <NextArrows />
  };
  const bannerSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    speed: 1000,
    
    appendDots: dots => (<div ><ul style={{ margin: "0px", }}> {dots} </ul></div>),
    customPaging: i => (<div className={`${i==1?'text-green-500':`${i==2?'text-blue-500':'text-red-500'}`}`}>0{i + 1}</div>
    )
    
  };
  useEffect(()=>{
    async function banner(){
      let data =await axios.get("http://localhost:1337/api/banners?populate=*")
      setBannerImage(data.data);
    
    }
    banner()
    
  },[])
  useEffect(()=>{
    async function facility(){
      let data =await axios.get("http://localhost:1337/api/facilities?populate=*")
      setFacility(data.data);
    }
    facility()
    
  },[])
  useEffect(()=>{
    async function add(){
      let data =await axios.get("http://localhost:1337/api/adds?populate=*")
      setAdd(data.data);
     
    }
    add()
    
  },[])
  useEffect(()=>{
    async function newarrival(){
      let data =await axios.get("http://localhost:1337/api/new-arrivals?populate=deep")
      setNewarrival(data.data);
    }
    newarrival()
    
  },[])
  useEffect(()=>{
    async function bestSeller(){
      let data =await axios.get("http://localhost:1337/api/our-bestsellers?populate=deep")
      setBestSeller(data.data);
      
    }
    bestSeller()
    
  },[])
  useEffect(()=>{
    async function year(){
      let data =await axios.get("http://localhost:1337/api/years?populate=deep")
      setYear(data.data);
      
    }
    year()
    
  },[])
  useEffect(()=>{
    async function special(){
      let data =await axios.get("http://localhost:1337/api/special-offers?populate=deep")
      setSecialOffer(data.data);
      console.log(data.data.data[0].attributes.products.data);
      
      
    }
    special()
    
  },[])
  
  return (
    <Section>
      <Slider {...bannerSettings}>
        {bannerimage&&bannerimage.data.map(item=>(
          <div>
          <Image src={`http://localhost:1337${item.attributes.images.data[0].attributes.url}`} alt={banner}/>
          </div>

        ))}
          
          
        </Slider>
      <Container>
      <div className='border-b border-t border-solid border-six py-5 mt-8 mb-36'>
        <Flex className='justify-between'>
          {facility && facility.data.map(item=>(
         <div className='flex gap-x-4'>
          <img  src={`http://localhost:1337${item.attributes.icon.data.attributes.url}`} alt="" />
          <p className='text-third text-base font-dm font-normal'>{item.attributes.title}</p>
         </div>
          ))}
             
        </Flex>
      </div>
    
        <div className='flex justify-between'>
          {add&&add.data.map((item,index)=>(
            index==0&&
            <div>
            <Image src={`http://localhost:1337${item.attributes.images.data[0].attributes.url}`}/>
          </div>

          ))}
          
          <div className='flex flex-col justify-between'>
          {add&&add.data.map((item,index)=>(
            index !=0 &&
            <div>
            <Image src={`http://localhost:1337${item.attributes.images.data[0].attributes.url}`}/>
          </div>

          ))}
            
           
          </div>
        </div>
      
      <SubHeading text={newarrival&&newarrival.data[0].attributes.title} className='pb-12 pt-32'/>
      <div className='relative pb-28'>
      <Slider {...settings}>
        {newarrival&&newarrival.data[0].attributes.products.data.map(item=>(
          <div>
          <Product badge={item.attributes.badge} price={item.attributes.price} heading={item.attributes.title} src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}/>
          </div>
        ))}
         
        </Slider>
      </div> 
   
      <SubHeading text={bestseller&& bestseller.data[0].attributes.title} className='pb-12'/>
      <Flex className='justify-between'>
      {bestseller&& bestseller.data[0].attributes.products.data.map(item=>(
        
        <Product badge={item.attributes.badge} price={item.attributes.price} heading={item.attributes.title} src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}/>
        ))}
      </Flex>
      <Link to='/'>
        {year&&
          <Image src={`http://localhost:1337${year.data[0].attributes.image.data.attributes.url}`} className='py-32'/>
        }
      </Link>
      <SubHeading text={secialOffer&&secialOffer.data[0].attributes.title} className='pb-12'/>
      <Flex className='justify-between pb-28'>
        {secialOffer&&secialOffer.data[0].attributes.products.data.map(item=>(
          
          <Product badge={item.attributes.badge} price={item.attributes.price} heading={item.attributes.title} src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}/>
        ))}
      
        
      </Flex>
      </Container>
    </Section>
  )
}
