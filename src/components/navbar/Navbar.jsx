import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import { useStateContext } from "../../contexts/ContextProvider";
import NavButton from '../navbar/NavButton';
import useAuth from "../../contexts/useAuth";
import BrandName from "../brandName/BrandName";
import Button from "../button/Button";
import { Link, NavLink, Navigate, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
    const { isLogin, currentUser, login, logout, isMenuActive, setIsMenuActive, screenSize } = useAuth();
    const [ isDashboard, setIsDashboard ] = useState(false);
    console.log(currentUser)
    const navigate = useNavigate();

    return (
        <>
            <div className="flex shadow-md px-6 py-3 w-full">
                <div className="flex items-center">
                    {isLogin ? <NavButton title='Menu' icon={<AiOutlineMenu/>} customFunc={() => setIsMenuActive((prev) => !prev)} color='blue'/> : <BrandName/>}
                </div>
                <div className="flex flex-1 justify-end items-center gap-2">
                    {!isLogin ? (
                        <>
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/login'>Log in</NavLink>
                            <NavLink to='/signup' className='btn-style m-0'>Sign up</NavLink>
                            {/* <NavLink className='btn-style m-0' to='/create-room'>Create Room</NavLink> */}
                        </>) :(
                        <>
                            <NavLink to='/dashboard'>Dashboard</NavLink>
                            <NavLink onClick={logout}>Logout</NavLink>
                            <span>{currentUser?.fullName}</span>

                        </>
                    )}       
                </div>
            </div>
        </>
    );
}
