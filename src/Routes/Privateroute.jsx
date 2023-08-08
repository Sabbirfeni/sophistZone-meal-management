import React from 'react'
import useAuth from '../contexts/useAuth';
import DashBoardLayout from '../layouts/dashboardLayout/DashboardLayout';
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const {isLogin} = useAuth();
    const location = useLocation();
    if(isLogin) return children;
    return <Navigate to='/login' state={{ from: location }} replace/>;
  }