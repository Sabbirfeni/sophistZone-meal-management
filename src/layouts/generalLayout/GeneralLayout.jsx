import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";

export default function GeneralLayout() {
  return (
    <>
        <div>
            <Navbar/>
            <div className="flex flex-col div-gap p-3">
              <Outlet/>
            </div>
        </div>
    </>
  );
}
