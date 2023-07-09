import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/Io";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../../constants/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

export default function Sidebar() {
  const { isMenuActive, setIsMenuActive, screenSize, setScreenSize } = useStateContext();
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 bg-sky-100 text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-500 dark:text-gray-200 dark:hover:text-gray-500 hover:bg-sky-100 m-2'
  
  useEffect(() => {
    const handleScreen = () => {
      setScreenSize(window.innerWidth)
    }
    handleScreen()
    window.addEventListener('resize', handleScreen);
    return () => window.removeEventListener('resize', handleScreen);
  }, [])
  
  useEffect(() => {
    screenSize <= 1200 ? setIsMenuActive(false) : setIsMenuActive(true)
  }, [screenSize])

  const handleCloseMenu = () => {
    isMenuActive && screenSize <= 768 ? setIsMenuActive(false) : setIsMenuActive(true)
  }
  
  return (
    <>
      <div className={`${isMenuActive ? 'w-72' : 'w-0'} fixed sidebar shadow-2xl dark:bg-secondary-dark-bg bg-white text-black transition`}>
        <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
          {isMenuActive && (
            <>
              <div className="flex justify-between items-center">
                <Link to='/' className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"><span>Sophist Zone</span></Link>
                <button type="button" onClick={() => setIsMenuActive((prev) => !prev)} className="text-xl rounded-full p-2 border-black hover:bg-light-gray bg-white mt-3 mr-3 block md:hidden">
                  <IoIosArrowBack/>
                </button>
              </div>
              <div className="mt-10">
                {links.map(item => (
                  <div key={item.title}>
                    <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                    {item.links.map(link => (
                      <NavLink key={link.name} onClick={handleCloseMenu} to={`${link.url}`} className={({ isActive }) => isActive ? activeLink : normalLink}>
                        {link.icon} <span>{link.name}</span>
                      </NavLink>
                    ))}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
