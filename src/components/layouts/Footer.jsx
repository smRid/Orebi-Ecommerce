import React, { useState,useEffect } from 'react'
import FooterHeading from '../FooterHeading'
import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import List from '../List'
import Image from '../Image'
import logo from '../../assets/logo.png'
import axios from 'axios'
import { FaFacebookF,FaLinkedinIn,FaInstagram } from 'react-icons/fa';
export default function Footer() {
  let [footer,setFooter]=useState("")
  useEffect(()=>{
    async function footer(){
      let data =await axios.get("http://localhost:1337/api/footer-parts?populate=deep")
      setFooter(data.data);
    }
    footer()
    
  },[])

  return (
  <>
  <Section className='py-14 bg-four'>
    <Container>
      <Flex>
          {footer&&footer.data[0].attributes.Item.map((item,index)=>(
       index !=3&&
        <div className='w-2/12'>
          
          <FooterHeading text={item.title} className='mb-4'/>
        <ul className='flex flex-col gap-y-1.5'>
          {item.List.map(item2=>(

        <List text={item2.title}/>
          ))}
        </ul>
        </div>
          ))}
          {footer&&footer.data[0].attributes.Item.map((item,index)=>(
            index==3&&
            <div className='w-3/12'>
            <FooterHeading text={item.title} className='mb-1.5 '/>
            {item.List.map((item2,index)=>(
              index ==0&&
              <FooterHeading text={item2.title} className='mb-1.5 mb-4'/>
              ))}
              {item.List.map((item2,index)=>(
              index !=0&&
              
              <p className='text-sm text-third font-dm font-normal'>{item2.title}</p>
              ))}
            
            </div>

          ))}
        
        
        <div className='w-3/12'>
          {footer&&
          <Image src={`http://localhost:1337${footer.data[0].attributes.logo.data.attributes.url}`} alt={logo}/>
          }
        </div>
      </Flex>
      <Flex className='mt-16'>
        <Flex className='w-1/2 text-third text-base gap-x-6'>
          {footer && footer.data[0].attributes.Icon.map(item=>(
            <img src={`http://localhost:1337${item.icon.data.attributes.url}`} alt="" />

          ))}

        </Flex>
        <div className='w-1/2'>
          <p className='text-third text-sm font-normal font-dm text-end'>{footer&&footer.data[0].attributes.copyright}</p>
        </div>
      </Flex>
    </Container>

  </Section>
  </>
  )
}
