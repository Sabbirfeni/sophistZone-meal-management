import React from 'react'
import './inputField.scss'
import { LuImagePlus } from 'react-icons/lu'
export default function FileInputField({ setFile }) {
  return (
    <div className='file-input-container'>
        <label htmlFor="file" className='flex p-2 rounded bg-gray-100 cursor-pointer hover:bg-gray-200'><LuImagePlus className='file-icon mr-2'/> Upload Image</label>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} id='file' style={{ display: 'none' }}/>
    </div>
  )
}
