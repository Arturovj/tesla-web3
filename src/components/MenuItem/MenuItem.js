import React from 'react'
import './MenuItem.css'

export default function MenuItem({ title }) {
  return (
    <div className='menuItem'>
      <h4>{title}</h4>
    </div>
  )
}
