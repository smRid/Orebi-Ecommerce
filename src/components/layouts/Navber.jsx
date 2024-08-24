import React, { useEffect, useState } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/logo.png'
import List from '../List'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { pages } from '../../slices/breadCrumbs'
import axios from 'axios'

export default function Navber() {
    let [navber,setNavber]=useState("")
    let dispatch=useDispatch()
    let handlebreadcrumbs=(name)=>{
        dispatch(pages(name))

    }
    useEffect(()=>{
        async function meno(){
            let data= await axios.get("http://localhost:1337/api/navbers?populate=*")
            setNavber(data.data);
            
        }
        meno()

    },[])
  return (
    <>
    <nav className='py-8'>
        <Container>
            <Flex>
                <div className='w-1/4'>
                    {navber&&
                    <Image src={`http://localhost:1337${navber.data[0].attributes.logo.data.attributes.url}`} alt={logo}/>
                    }
                </div>
                <Flex className='w-3/4 justify-end'>
                    <ul className='flex gap-x-10'>
                        {navber&&navber.data[0].attributes.Nav.map(item=>(
                            <Link onClick={()=>handlebreadcrumbs(item.title)} to={item.url}>
                            <List text={item.title}/>
                        </Link>

                        ))}
                        
                        
                    </ul>
                </Flex>
            </Flex>
        </Container>
    </nav>
    </>
  )
}
