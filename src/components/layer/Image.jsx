import React from 'react'
import { Link } from 'react-router-dom'

const Image = ({alt, src, href}) => {
  return (
    <Link to={href}>
    <picture>
        <img src={src} alt={alt} />
    </picture>
    </Link>
  )
}

export default Image