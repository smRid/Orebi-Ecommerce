import React from 'react'

export default function ProtionHeading({text,className}) {
  return (
    <h4 className={` text-primary text-xl font-dm font-bold ${className}`}>{text}</h4>
  )
}
