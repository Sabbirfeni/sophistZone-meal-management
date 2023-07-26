import React, { useState } from 'react'
import Form from '../../components/form/Form'
import InputField from '../../components/inputElements/inputField';
import FileInputField from '../../components/inputElements/fileInputField';

export default function CreateRoom() {
    const [ profileImg, setProfileImg ] = useState(null);

  return (
    <div className='box-style'>
        <Form title='Create a room' submitValue='Create'>
            <div className='m-4'>
                <div className='flex justify-center'>
                    <img className='profile-img-preview' src={profileImg ? URL.createObjectURL(profileImg) : "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"} alt="" />
                </div>
                <FileInputField setFile={setProfileImg}/>
            </div>
            <div className='flex flex-wrap'>
                <InputField label={'Room Name'} type={'text'} value={''} placeholder={'room name'}/>
                <InputField label={'Your Name'} type={'text'} value={''} placeholder={'your name'}/>
                <InputField label={'Email'} type={'email'} value={''} placeholder={'email'}/>
                <InputField label={'Password'} type={'password'} value={''} placeholder={'password'}/>
            </div>
            <div className='flex flex-wrap'>
                <InputField label={'Phone'} type={'number'} value={''} placeholder={'phone'}/>
                <InputField label={'University/School/College'} type={'text'} value={''} placeholder={'university/school/college'}/>
                <InputField label={'Session'} type={'text'} value={''} placeholder={'session'}/>
                <InputField label={'Department'} type={'text'} value={''} placeholder={'department'}/>
            </div>
            <div className='flex flex-wrap'>
                <InputField label={'Address'} type={'text'} value={''} placeholder={'address'}/>
                <InputField label={'City Name'} type={'text'} value={''} placeholder={'city name'}/>
                <InputField label={'District Name'} type={'text'} value={''} placeholder={'district name'}/>
                <InputField label={'ZIP Code'} type={'number'} value={''} placeholder={'zip code'}/>
            </div>             
        </Form>
    </div>
  )
}
