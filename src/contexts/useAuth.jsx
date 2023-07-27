import React, { useContext, useState } from "react";
import {useNavigate } from "react-router-dom";
import '../../firebase'
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [ isMenuActive, setIsMenuActive ] = useState(false);
    const [ screenSize, setScreenSize ] = useState(undefined);
    const [ user, setUser ] = useState(false);
    const db = getDatabase();

    const createRoom = (newRoomData, roomHostData) => {
        const roomRandomNumber = Math.floor((Math.random() * 10000000) + 1);
        const userRandomNumber = Math.floor((Math.random() * 10000000) + 1);
        console.log(newRoomData)
        const roomID = newRoomData.roomName.split(" ").join("").toLowerCase() + '-' + roomRandomNumber;
        const userID = roomHostData.userName.split(" ").join("").toLowerCase() + '-' + userRandomNumber;
        set(ref(db, `Rooms/` + `${roomID}`), {roomID, ...newRoomData})
        set(ref(db, `Users/` + `${userID}`), {roomID, userID, ...roomHostData})
        .then(() => {
            alert('Room successfully added')
        })
        .catch(error => {
            alert(error.messege)
        })
    }

    const login = async () => {
        setUser(true);
    }
    const logout = () => {
        setUser(false)
    }

    const values = { user, login, logout, isMenuActive, setIsMenuActive, screenSize, setScreenSize, createRoom }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);
export default useAuth;

