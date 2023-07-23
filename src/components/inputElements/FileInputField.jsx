import React from 'react'
import './inputField.scss'
import { LuImagePlus } from 'react-icons/lu'
export default function FileInputField({ setFile }) {
  return (
    <div className='input-container'>
        <label htmlFor="file" className='flex'><LuImagePlus className='file-icon mr-2'/> Select Image</label>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} id='file' style={{ display: 'none' }}/>
    </div>
  )
}
