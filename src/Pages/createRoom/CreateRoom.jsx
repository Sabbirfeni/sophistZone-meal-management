import React, { useState } from 'react'
import Form from '../../components/form/Form'
import InputField from '../../components/inputElements/inputField';
import FileInputField from '../../components/inputElements/fileInputField';
import useAuth from '../../contexts/useAuth';


export default function CreateRoom() {
    const [ profileImg, setProfileImg ] = useState(null);
    // console.log(profileImg)
    const { createRoom } = useAuth();
    const [ newRoomData, setNewRoomData] = useState({ roomName: null });
    const [ roomHostData, setRoomHostData ] = useState({
        userProfile: '',
        userName: '',
        userEmail: '',
        userPassword: '',
        userRole: 'Host',
        userStatus: 'Active',
        userPhone: '',
        userInstitute: '',
        userSession: '',
        userDept: '',
        userAddress: '',
        userCity: '',
        userDistrict: '',
        userZIP: ''
    })
    const handleNewRoomData = e => {
        setNewRoomData({ ...newRoomData, [e.target.name]: e.target.value })
    }
    const handleHostData = e => {
        if(e.target.value) {
            setRoomHostData({ ...roomHostData, [e.target.name]: e.target.value })
        } else if(e.target.files[0]) {
            setRoomHostData({ ...roomHostData, [e.target.name]: URL.createObjectURL(e.target.files[0]) })
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        createRoom(newRoomData, roomHostData)
    }
    console.log(roomHostData)
  return (
    <div className='box-style'>
        <Form title='Create a room' submitValue='Create' action={handleSubmit}>
            <div className='m-4'>
                <div className='flex justify-center'>
                    <img className='profile-img-preview' src={profileImg ? URL.createObjectURL(profileImg) : "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"} alt="" />
                </div>
                <FileInputField name={'userProfile'} handleOnChange={handleHostData} setFile={setProfileImg}/>
            </div>
            <div className='flex flex-wrap'>
                <InputField label={'Room Name'} name={'roomName'} handleOnChange={handleNewRoomData} type={'text'} value={''} placeholder={'room name'}/>
                <InputField label={'Your Name'} name={'userName'} handleOnChange={handleHostData} type={'text'} value={''} placeholder={'your name'}/>
                <InputField label={'Email'} name={'userEmail'} handleOnChange={handleHostData} type={'email'} value={''} placeholder={'email'}/>
                <InputField label={'Password'} name={'userPassword'} handleOnChange={handleHostData} type={'password'} value={''} placeholder={'password'}/>
            </div>
            <div className='flex flex-wrap'>
                <InputField label={'Phone'} name={'userPhone'} handleOnChange={handleHostData} type={'number'} value={''} placeholder={'phone'}/>
                <InputField label={'University/School/College'} handleOnChange={handleHostData} name={'userInstitute'} type={'text'} value={''} placeholder={'university/school/college'}/>
                <InputField label={'Session'} name={'userSession'} handleOnChange={handleHostData} type={'text'} value={''} placeholder={'session'}/>
                <InputField label={'Department'} name={'userDept'} handleOnChange={handleHostData} type={'text'} value={''} placeholder={'department'}/>
            </div>
            <div className='flex flex-wrap'>
                <InputField label={'Address'} handleOnChange={handleHostData} name={'userAddress'} type={'text'} value={''} placeholder={'address'}/>
                <InputField label={'City Name'} handleOnChange={handleHostData} name={'userCity'} type={'text'} value={''} placeholder={'city name'}/>
                <InputField label={'District Name'} handleOnChange={handleHostData} name={'userDistrict'} type={'text'} value={''} placeholder={'district name'}/>
                <InputField label={'ZIP Code'} handleOnChange={handleHostData} name={'userZIP'} type={'number'} value={''} placeholder={'zip code'}/>
            </div>             
        </Form>
    </div>
  )
}
