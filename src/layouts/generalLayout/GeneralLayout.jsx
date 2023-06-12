import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function GeneralLayout() {
  return (
    <>
        <div>
            <div>Navbar</div>
            <Outlet/>
            <Link to='/dashboard'>Go to Dashboard</Link>
        </div>
    </>
  );
}
