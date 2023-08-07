import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../contexts/useAuth";
import Form from "../../components/form/Form";
import InputField from "../../components/inputElements/inputField";
import { getDatabase, set, ref, get, child } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

export default function Login() {
  const [ userInputs, setUserInputs ] = useState({
    email: null,
    password: null
  })

  const handleOnChange = e => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value })
  }
  console.log(userInputs)


  return (
    <>
     <div className="box-style">
      <Form title='Login' submitValue='Login' >
        <InputField label='Email' name='email' handleOnChange={handleOnChange} type='email' value={userInputs.email} placeholder='email'/>
        <InputField label='Password' name='password' handleOnChange={handleOnChange} type='password' value={userInputs.password} placeholder='password'/>
      </Form>
     </div>
    </>
  );
}
