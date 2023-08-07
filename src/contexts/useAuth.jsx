import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import {useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [ isMenuActive, setIsMenuActive ] = useState(false);
    const [ screenSize, setScreenSize ] = useState(undefined);
    const [ loading, setLoading ] = useState(false);
    const [ user, setUser ] = useState(null);
    const [ room, setRoom ] = useState(null);
    const [ error, setError ] = useState(null)

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUser = (photo) => {
        setUser(auth.currentUser)
        return updateProfile(auth.currentUser, { photoURL: photo })
    }
    const logout = () => {
        setUser(null)
    }

    const values = { loading, setLoading, user, setUser, signup, updateUser, room, logout, error, setError, isMenuActive, setIsMenuActive, screenSize, setScreenSize }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);
export default useAuth;

