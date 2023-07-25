import React from 'react'
import Form from '../../components/form/Form'
import InputField from '../../components/inputElements/inputField';

export default function CreateRoom() {
  return (
    <div className='box-style'>
        <Form title='Create A Room' submitValue='Create'>
            <div className='flex flex-wrap'>
                <InputField label={'Room Name'} type={'text'} value={''} placeholder={'room name'}/>
                <InputField label={'Your Name'} type={'text'} value={''} placeholder={'your name'}/>
                <InputField label={'Email'} type={'email'} value={''} placeholder={'email'}/>
            </div>
            <div className='flex flex-wrap'>
                <InputField label={'Phone'} type={'number'} value={''} placeholder={'phone'}/>
                <InputField label={'Name of University'} type={'text'} value={''} placeholder={'name of university'}/>
                <InputField label={'Address'} type={'text'} value={''} placeholder={'address'}/>
            </div>
            <div className='flex flex-wrap'>  
                <InputField label={'City Name'} type={'text'} value={''} placeholder={'city name'}/>
                <InputField label={'District Name'} type={'text'} value={''} placeholder={'district name'}/>
                <InputField label={'ZIP Code'} type={'number'} value={''} placeholder={'zip code'}/>
            </div>             
        </Form>
    </div>
  )
}
