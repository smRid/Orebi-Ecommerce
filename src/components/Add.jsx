import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'

import add from '../assets/Ad.jpg'

const Add = () => {
  return (
    <Container className='mt-10'>
        <Image className='w-full' src={add} />
    </Container>
  )
}

export default Add