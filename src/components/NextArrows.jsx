import React from 'react'
import RightArrow from './icons/RightArrow';

export default function NextArrows({className,onClick}) {
  return (
    <div
      className={`${className} absolute top-40 right-0  z-10 inline-block bg-five w-16 h-16 rounded-full flex justify-center items-center`}
      onClick={onClick}
    >
        <RightArrow/>

    </div>
  )
}
