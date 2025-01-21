import { createBrowserRouter, Navigate } from "react-router-dom"
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
import Account from "../pages/customer/Account";
import GuestLayout from "../layouts/GuestLayout";
import Login from "../pages/customer/Login";
import Signup from "../pages/customer/Signup";
import NotFound from "../pages/NotFound";
import FrontStore from "@/pages/guest/FrontStore";
import Sale from "@/pages/guest/Sale";
import Categories from "@/pages/guest/Categories";
import CategoryPage from "@/pages/guest/CategoryPage";

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
            {
                path: '/store',
                element: <FrontStore />
            },
            {
                path: '/sale',
                element: <Sale />
            },
            {
                path: '/categories',
                element: <Categories />
            },
            {
                path: '/category-page',
                element: <CategoryPage />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    },
]);

export default router