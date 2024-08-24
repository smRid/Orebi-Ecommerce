import React from 'react'

export default function Badge({className,text}) {
  return (
    <button className={`text-white text-sm font-dm font-bold bg-primary py-2 px-8 absolute top-5 left-5 ${className}`}>{text}</button>
  )
}
