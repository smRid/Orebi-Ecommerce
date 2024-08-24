import React from 'react'

export default function Button({text,className,type}) {
  return (
    <button type={`${type}`} className={`bg-black text-white py-4 px-14 text-sm font-dm font-bold hover:bg-white hover:text-black border hover:border-black duration-500 ${className}`}>{text}</button>
  )
}
