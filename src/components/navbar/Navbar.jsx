import React from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import { useStateContext } from "../../contexts/ContextProvider";
import NavButton from '../navbar/NavButton';

export default function Navbar() {
    const { isMenuActive, setIsMenuActive, screenSize } = useStateContext();
    const menuBarShow = ''
    return (
        <>
            <div className="flex items-center shadow-md">
                <NavButton title='Menu' icon={<AiOutlineMenu/>} customFunc={() => setIsMenuActive((prev) => !prev)} color='blue'/>
                <span className="pl-3">{!isMenuActive ? 'Sophist Zone' : null}</span>
            </div>
        </>
    );
}
