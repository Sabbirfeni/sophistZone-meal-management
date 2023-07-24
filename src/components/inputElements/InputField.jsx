import React from 'react'
import './inputField.scss'

export default function InputField({ label, type, value, placeholder }) {
  return (
    <div className='input-container'>
        <label className='mb-1'>{label}</label>
        <input type={type} className='py-2 px-3' placeholder={placeholder}/>
    </div>
  )
}
