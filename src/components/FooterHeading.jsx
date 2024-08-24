import React from 'react'

export default function FooterHeading({text,className}) {
  return (
    <h4 className={`text-base text-primary font-dm font-bold ${className}`}>{text}</h4>
  )
}
