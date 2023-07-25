import React from "react";


export default function NavButton({ customFunc, icon }) {
  return (
    <button type="button" onClick={customFunc} className="text-xl flex items-center">
        {icon} 
        {/* <span className="ml-2">Room Name</span> */}
    </button>
  );
}