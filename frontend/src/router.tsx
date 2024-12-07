import { createBrowserRouter, Navigate } from "react-router-dom"
import AuthenticatedLayout from "./components/AuthenticatedLayout";
import Account from "./views/Account";
import GuestLayout from "./components/GuestLayout";
import Login from "./views/Login";
import Signup from "./views/Signup";
import NotFound from "./views/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthenticatedLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/account" />
            },
            {
                path: '/account',
                element: <Account />
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    },
]);

export default router