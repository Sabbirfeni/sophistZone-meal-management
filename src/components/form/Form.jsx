import React from 'react'
import './form.scss'
import Button from '../button/Button'

export default function Form({ children, title, submitValue }) {
  return (
    <form className='form'>
        <h1 className='form-title'>{title}</h1>
        {children}
        <Button type="submit" className='btn-style' value={submitValue}/>
    </form>
  )
}
