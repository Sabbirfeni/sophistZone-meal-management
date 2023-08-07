import React from 'react'
import './inputField.scss'

export default function InputField({ label, name = '', handleOnChange, type, value, placeholder, required }) {
  return (
    <div className='input-container'>
        <label className='mb-1'>{label}</label>
        <input name={name} type={type} onChange={(e) => handleOnChange(e)} className='py-2 px-3 text-black' placeholder={placeholder} required/>
    </div>
  )
}
