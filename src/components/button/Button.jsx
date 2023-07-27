import React from 'react'
import '../../App.css'
export default function Button({ type, action = null, value, btnStyle }) {
  return (
    <button type={type} className={btnStyle} style={{ backgroundColor: '#3a3ae7'}} onClick={(e) => action(e)}>{value}</button>
  )
}
