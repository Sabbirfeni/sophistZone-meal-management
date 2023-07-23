import React from 'react'
import '../../App.css'
export default function Button({ type, action = null, value }) {
  return (
    <button type={type} className='btn-style' style={{ backgroundColor: '#3a3ae7'}} onClick={action}>{value}</button>
  )
}
