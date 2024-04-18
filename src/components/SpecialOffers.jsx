import React from 'react'
import Container from './layer/Container'
import Title from './layer/Title'
import ProductItem from './layer/ProductItem'

const SpecialOffers = () => {
  return (
    <div className='pt-10'>
        <Container>
            <Title text='Special Offers'/>
            <div className='flex justify-between'>
                <ProductItem offer='10%'/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
        </Container>
    </div>
  )
}

export default SpecialOffers