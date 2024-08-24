import React from 'react'
import { BiSearch } from 'react-icons/bi';

export default function Input({placeholder,className}) {
  return (
    <div className='relative'>
     <input type="text" className={`w-full py-4 px-5 ${className}`} placeholder={placeholder}/>
    <BiSearch className='text-primary text-base absolute top-1/2 right-5 -translate-y-1/2'/>
    </div>
  )
}
