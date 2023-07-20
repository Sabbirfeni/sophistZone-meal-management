import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, Navbar } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

export default function DashBoardLayout() {
  const { isMenuActive } = useStateContext();
  return (
    <>
        <div className="flex relative dark:bg-main-dark-bg">
          <Sidebar />
          <div className={`dark:bg-main-bg bg-main-bg min-h-screen text-black w-full ${isMenuActive ? 'md:ml-72' : 'flex-2'}`}>
              <Navbar/>
              <div className="flex flex-col div-gap p-3">
                <Outlet />
              </div>
          </div>
        </div>
    </>
  );
}