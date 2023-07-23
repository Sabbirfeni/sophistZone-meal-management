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
                path: 'users/new',
                element: <New/>,
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