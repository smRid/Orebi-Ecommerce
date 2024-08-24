import React from 'react'

export default function Input2({className,placeholder,id}) {
  return (
    <input id={id} type="text" placeholder={placeholder} className={`w-full py-4 border-b bordere-solid text-third text-sm font-dm font-normal ${className}`}/>
  )
}
