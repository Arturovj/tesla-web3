import React from 'react'
import './MenuItem.css'

export default function MenuItem({ title }) {
  return (
    <div className='menuItem'>
      <h4><span>{title}</span></h4>
    </div>
  )
}
