import { createBrowserRouter } from "react-router-dom";
import { Home, Login, New, Single, Dashboard } from "../Pages";

import GeneralLayout from "../layouts/generalLayout/GeneralLayout";
import DashboardLayout from "../layouts/dashboardLayout/DashboardLayout";
import PrivateRoute from "./Privateroute";
import DashBoardLayout from "../layouts/dashboardLayout/DashboardLayout";
import Users from "../Pages/user/Users";
import SingleUser from "../Pages/user/SingleUser";
import Transaction from "../Pages/transaction/Transaction";
import Meal from "../Pages/meal/Meal";
import AddUser from "../Pages/user/AddUser";
import AddTransaction from "../Pages/transaction/AddTransaction";
import AddMeal from "../Pages/meal/AddMeal";
import CreateRoom from "../Pages/createRoom/CreateRoom";
import SignUp from "../Pages/signup/SignUp";
const route = createBrowserRouter([
    {
        path: '/',
        element: <GeneralLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'login',
                element: <Login/>,
            },
            {
                path: 'signup',
                element: <SignUp/>,
            },
            {
                path: 'create-room',
                element: <CreateRoom/>
            }
        ]
    },
    {
        path: '/dashboard',
        element: (
            <PrivateRoute>
                <DashBoardLayout/>
            </PrivateRoute>),
        children: [
            {
                path: '',
                element: <Dashboard/>
            },
            {
                path: 'overview',
                element: <Dashboard/>,
            },
            {
                path: 'users',
                element: <Users/>
            },
            {
                path: 'users/:id',
                element: <SingleUser/>
            },
            {
                path: 'transactions',
                element: <Transaction/>
            },
            {
                path: 'Meal',
                element: <Meal/>
            },
            {
                path: 'add-user',
                element: <AddUser/>
            },
            {
                path: 'add-transaction',
                element: <AddTransaction/>,
            },
            {
                path: 'add-meal',
                element: <AddMeal/>,
            },
            {
                path: 'product',
                element: <SingleUser/>
            },
            {
                path: 'product/:productId',
                element: <Single/>,
            },
            {
                path: 'product/new',
                element: <New/>,
            }
        ]
    },
    
])
export default route;