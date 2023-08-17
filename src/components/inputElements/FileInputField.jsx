import React from 'react'
import './inputField.scss'
import { LuImagePlus } from 'react-icons/lu'
import useAuth from '../../contexts/useAuth'
export default function FileInputField({ handleOnChange, setFile, name, required }) {
  const { loading } = useAuth()
  return (
    <div className='file-input-container'>
        <label htmlFor="file" className='flex p-2 rounded bg-gray-100 cursor-pointer hover:bg-gray-200'><LuImagePlus className='file-icon mr-2'/>{loading ? 'Loading...' : 'Your image'}</label>
        <input type="file" name={name} onChange={(e) => {
            handleOnChange(e)
          }} id='file' style={{ display: 'none' }} required={required}/>
    </div>
  )
}
