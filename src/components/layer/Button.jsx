import React from 'react'

const Button = ({ text , className }) => {
  return (
    <button className={`w-1/2 py-4 bg-[#262626] text-white font-DM font-bold text-sm border border-transparent hover-border-[#262626] hover:bg-white transition-all duration-300 hover:text-[#262626] ${className}`}>{text}</button>
  )
}

export default Button
