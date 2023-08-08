import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import {useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useEffect } from "react";
const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [ isMenuActive, setIsMenuActive ] = useState(false);
    const [ screenSize, setScreenSize ] = useState(undefined);
    const [ loading, setLoading ] = useState(false);
    const [ isLogin, setIsLogin ] = useState(JSON.parse(localStorage.getItem('currentUserId')) || null);
    const [ currentUser, setCurrentUser ] = useState(null);
    const [ room, setRoom ] = useState(null);
    const [ error, setError ] = useState(null)

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
   
    const updateUser = (userName, userProfileImg) => {
        setCurrentUser(auth.currentUser)
        localStorage.setItem('currentUserId', JSON.stringify(auth.currentUser.uid))
        return updateProfile(auth.currentUser, { displayName: userName,  photoURL: userProfileImg })
    }

    const logout = () => {
        localStorage.removeItem('currentUserId');
        setIsLogin(null)
    }
    
    useEffect(() => {
        console.log(isLogin)
    }, [])

    const values = { loading, setLoading, isLogin, setIsLogin, signup, updateUser, room, logout, error, setError, isMenuActive, setIsMenuActive, screenSize, setScreenSize }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);
export default useAuth;

