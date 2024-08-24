import React from 'react'
import LeftArrow from './icons/LeftArrow';

export default function PrevArrows({className,onClick}) {
  return (
    <div
    className={`${className} absolute top-40 left-0  z-10 inline-block bg-five w-16 h-16 rounded-full flex justify-center items-center`}
    onClick={onClick}>
    <LeftArrow/>
  </div>
  )
}
