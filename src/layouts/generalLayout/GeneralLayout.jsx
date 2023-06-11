import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function GeneralLayout() {
  return (
    <>
        <div>
            <div>Navbar</div>
            <Outlet/>
            <Link to='/room/dashboard'>Go to Room</Link>
        </div>
    </>
  );
}
