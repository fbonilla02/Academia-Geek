import React from 'react'

export default function List({img, alt}) {
  return (
    <li>
    <img src={img} alt={alt} />
    </li>
  )
}
