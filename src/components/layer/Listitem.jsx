import React from 'react'
import { Link } from 'react-router-dom'

const Listitem = ({text,href, className}) => {
  return (
    <li className='group'>
        <Link className={` text-[#767676] font-DM text-sm font-[700] hover:text-[black] transition-all duration-300 ${className}`} to={href} >
            {text}
        </Link>
    </li>
  )
}

export default Listitem