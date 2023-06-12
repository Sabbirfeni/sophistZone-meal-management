import React from "react";
import { useLocation } from "react-router-dom";

export default function Login() {
  const location = useLocation();
  const prevLocation = location.state.from.pathname;
  console.log(prevLocation);
  return <div>Login</div>;
}
