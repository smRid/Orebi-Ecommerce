import React from 'react'

export default function List({text,className}) {
  return (
    <li className={`text-sm text-secondary font-dm font-normal list-none cursor-pointer hover:text-primary duration-500 ${className}`}>{text}</li>
  )
}
