import React from "react";


export default function NavButton({ customFunc, icon }) {
  return (
    <button type="button" onClick={customFunc} className="text-xl">
        {icon}
    </button>
  );
}