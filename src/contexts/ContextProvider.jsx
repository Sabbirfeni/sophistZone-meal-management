import React, { useContext, useState } from 'react';
const StateContext = React.createContext();

export const ContextProvider = ({ children }) => {
    const [ isMenuActive, setIsMenuActive ] = useState(false);
    const [ screenSize, setScreenSize ] = useState(undefined);

    return (
        <StateContext.Provider value={{ isMenuActive, setIsMenuActive, screenSize, setScreenSize }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);