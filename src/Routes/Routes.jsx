import { createBrowserRouter } from "react-router-dom";
import { Home, Login, New, Single, List, Dashboard } from "../Pages";
import GeneralLayout from "../layouts/generalLayout/GeneralLayout";
import DashboardLayout from "../layouts/dashboardLayout/DashboardLayout";
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
        path: '/room',
        element: <DashboardLayout/>,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard/>
            },
            {
                path: 'users',
                element: <List/>
            },
            {
                path: 'ecommerce',
                element: <List/>
            },
            {
                path: 'orders',
                element: <List/>
            },
            {
                path: 'employees',
                element: <List/>
            },
            {
                path: 'users/:userId',
                element: <Single/>,
            },
            {
                path: 'users/new',
                element: <New/>,
            },
            {
                path: 'product',
                element: <List/>
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