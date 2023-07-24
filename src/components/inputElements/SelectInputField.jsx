import React from 'react'

export default function SelectInputField({ label, options }) {
  return (
    <div className='input-container'>
         <label for="cars">{label}</label>
            <select name={label} id={label} className='mt-1 h-10 bg-gray-100'>
                {options.map(option => <option value={option}>{option}</option>)}
            </select>
    </div>
  )
}
