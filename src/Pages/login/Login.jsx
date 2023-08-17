import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../contexts/useAuth";
import Form from "../../components/form/Form";
import InputField from "../../components/inputElements/inputField";
import { getDatabase, set, ref, get, child } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

export default function Login() {
  const { login, loading, setLoading, isLogin, setIsLogin, error, setError, currentUser } = useAuth();
  const navigate = useNavigate();
  const [ userInputs, setUserInputs ] = useState({
    email: null,
    password: null
  })
  const { email, password } = userInputs;
  const handleOnChange = e => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value })
  }
  const handleLogin = async e => {
    e.preventDefault();
    try {
      setLoading(true)
      await login(email, password)
      setLoading(false)
      navigate('/dashboard')
    }
    catch(err) {
      setLoading(false)
      setError(err.message)
    }
  }


  return (
    <>
     <div className="box-style">
      <Form title='Login' submitValue='Login' action={handleLogin}>
        <InputField label='Email' name='email' handleOnChange={handleOnChange} type='email' value={userInputs.email} placeholder='email'/>
        <InputField label='Password' name='password' handleOnChange={handleOnChange} type='password' value={userInputs.password} placeholder='password'/>
      </Form>
     </div>
    </>
  );
}
