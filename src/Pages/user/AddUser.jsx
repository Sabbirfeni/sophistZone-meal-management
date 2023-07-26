import React, { useState } from 'react'
import './add-user.scss'
import InputField from '../../components/inputElements/inputField'
import Form from '../../components/form/Form'
import FileInputField from '../../components/inputElements/fileInputField'

export default function AddUser() {
    const [ profileImg, setProfileImg ] = useState(null);

  return (
    <div className='add-user-container box-style'>
            <Form title='Add new user' submitValue='Add User'>
                <div className='m-4'>
                    <div className='flex justify-center'>
                        <img className='profile-img-preview' src={profileImg ? URL.createObjectURL(profileImg) : "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"} alt="" />
                    </div>
                    <FileInputField setFile={setProfileImg}/>
                </div>
                <div className='flex flex-wrap'>
                    <InputField label={'User Name'} type={'text'} value={''} placeholder={'usernames'}/>
                    <InputField label={'Email'} type={'email'} value={''} placeholder={'email'}/>
                </div>
                <div className='flex flex-wrap'>
                    <InputField label={'Phone'} type={'number'} value={''} placeholder={'phone'}/>
                    <InputField label={'University/school/college'} type={'text'} value={''} placeholder={'university/school/college'}/>
                </div>
                <div className='flex flex-wrap'>
                    <InputField label={'Session'} type={'text'} value={''} placeholder={'session'}/>
                    <InputField label={'Department'} type={'text'} value={''} placeholder={'deparment'}/>
                </div>
                <div className='flex flex-wrap'>
                    <InputField label={'Home Address'} type={'text'} value={''} placeholder={'home address'}/>
                    <InputField label={'City Name'} type={'text'} value={''} placeholder={'city name'}/>
                </div>
                
                <div className='flex flex-wrap'>
                    <InputField label={'District Name'} type={'text'} value={''} placeholder={'district name'}/>
                    <InputField label={'ZIP Code'} type={'number'} value={''} placeholder={'zip code'}/>
                </div>
                
            </Form>
    </div>
  )
}
