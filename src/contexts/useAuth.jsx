import React, { useContext, useState } from "react";
import {useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [ isMenuActive, setIsMenuActive ] = useState(false);
    const [ screenSize, setScreenSize ] = useState(undefined);
    const [ user, setUser ] = useState(false)


    const login = async () => {
        setUser(true);
    }
    const logout = () => {
        setUser(false)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, isMenuActive, setIsMenuActive, screenSize, setScreenSize }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);
export default useAuth;

