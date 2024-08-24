import React from 'react'
import Image from '../components/Image'
import error404 from '../assets/404.png'
import Section from '../components/Section'
import Container from '../components/Container'
import Input from '../components/Input'
import Button from '../components/Button'

export default function ErrorPage() {
  return (
    <Section className='py-36'>
      <Container>
        <Image src={error404} alt={error404} />
        <p className='w-644 text-secondary text-base font-dm font-normal py-12'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
        <div className="w-644">
        <Input placeholder='Type to search' className='border border-solid'/>
        </div>
        <Button text='Back to Home' className='mt-16'/>
      </Container>
    </Section>
  )
}
