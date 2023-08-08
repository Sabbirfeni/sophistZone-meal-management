import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import {useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { useEffect } from "react";
import { collection, addDoc, doc, setDoc, getDoc } from "firebase/firestore"; 

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
   
    const addSignupUserToList = (userData) => {
        
        localStorage.setItem('currentUserId', JSON.stringify(auth.currentUser.uid))
        setIsLogin(JSON.parse(localStorage.getItem('currentUserId')))
        setCurrentUser(userData)
        const docRef = doc(db, 'Users', auth.currentUser.uid);
        return setDoc(docRef, userData)
        // return updateProfile(auth.currentUser, { displayName: userName,  photoURL: userProfileImg })
    }

    const logout = () => {
        localStorage.removeItem('currentUserId');
        setIsLogin(null)
    }
    
    useEffect(() => {
        if(isLogin) {
            const getCurrentUserData = async () => {
                const docRef = doc(db, "Users", isLogin);
                const docSnap = await getDoc(docRef);

                if(docSnap.exists()) {
                    setCurrentUser(docSnap.data())
                }
                else {
                    console.log('user not exist')
                }
            }
          getCurrentUserData()
        } else {
            console.log('user not exist')
        }
    
    }, [])

    const values = { currentUser, loading, setLoading, isLogin, setIsLogin, signup, addSignupUserToList, room, logout, error, setError, isMenuActive, setIsMenuActive, screenSize, setScreenSize }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);
export default useAuth;

