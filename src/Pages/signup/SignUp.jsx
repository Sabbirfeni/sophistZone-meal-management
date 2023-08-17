import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../contexts/useAuth";
import Form from "../../components/form/Form";
import InputField from "../../components/inputElements/inputField";
import FileInputField from "../../components/inputElements/fileInputField";
import '../../../firebase'
import { auth, storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Button from "../../components/button/Button";

export default function SignUp() {
    const { isLogin, loading, setLoading, error, setError, signup, googleSignUp, addSignupUserToList } = useAuth()
    const navigate = useNavigate();
    const [ file, setFile ] = useState(null);
    const [ userInputs, setUserInputs ] = useState({
    profileImgFile: null,
    fullName: null,
    email: null,
    password: null
  })
  const { profileImgFile, fullName, email, password } = userInputs;

  const handleOnChange = e => {
    if(e.target.name === 'profileImgFile') {
        setFile(e.target.files[0])
    }
    if(e.target.name !== 'profileImgFile') {
        setUserInputs({ ...userInputs, [e.target.name]: e.target.value })
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if(file && fullName && email && password) {
        setLoading(true)
        try {
            await signup(email, password);
            await addSignupUserToList(userInputs, auth.currentUser.uid);
            setLoading(false);
            navigate('/dashboard');
        }
        catch(err) {
            setError(err.message)
            setLoading(false)
        }
    } else {
        setError('Please enter all data.')
    }
  }
  const handleGoogleSignUp = async () => {
    try {
      setLoading(true)

      await googleSignUp()
      setLoading(false)
      navigate('/dashboard')
      
    }
    catch(err) {
      console.log(err.message)
    }
  }
  useEffect(() => {
    const uploadProfile = () => {
        const storageRef = ref(storage, 'images/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        
        uploadTask.on('state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            setLoading(progress > 0 ? false : true)
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
            }
          }, 
          (error) => {
            switch (error.code) {
              case 'storage/unauthorized':
                break;
              case 'storage/canceled':
                break;
              case 'storage/unknown':
                break;
            }
          }, 
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setUserInputs({ ...userInputs, profileImgFile: downloadURL })
            });
          }
        );
    }
    file && uploadProfile()
  }, [file])

  return (
    <>
     <div className="box-style">
      <Form title='Sign up' submitValue='Sign up' action={handleSubmit}>
        <h4 className="text-red-400">{error}</h4>
        <div className='m-4'>
                <div className='flex justify-center'>
                    <img className='profile-img-preview' src={file ? URL.createObjectURL(file) : "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"} alt="" />
                </div>
                <FileInputField name='profileImgFile' handleOnChange={handleOnChange} setFile={setFile} required={true}/>
            </div>
        <InputField label='Full name' name='fullName' handleOnChange={handleOnChange} type='text' value={fullName} placeholder='full name' required={true}/>
        <InputField label='Email' name='email' handleOnChange={handleOnChange} type='email' value={email} placeholder='email' required={true}/>
        <InputField label='Password' name='password' handleOnChange={handleOnChange} type='password' value={password} placeholder='password' required={true}/>
        <Button btnStyle='btn-style form-btn' type='button' action={handleGoogleSignUp} value='Sign up with google'/>
      </Form>
     </div>
    </>
  );
}