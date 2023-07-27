import React from 'react'
import './form.scss'
import Button from '../button/Button'

export default function Form({ children, title, submitValue, action }) {
  return (
    <form className='form'>
        <h1 className='form-title'>{title}</h1>
        {children}
        <div className='float-right'>
          <Button type="submit" btnStyle='btn-style form-btn' action={action} value={submitValue}/>
        </div>
    </form>
  )
}
