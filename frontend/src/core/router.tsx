import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
import GuestLayout from "../layouts/GuestLayout";
import Login from "../pages/customer/Login";
import Signup from "../pages/customer/Signup";
import NotFound from "../pages/NotFound";
import FrontStore from "@/pages/guest/FrontStore";
import Sale from "@/pages/guest/Sale";
import Categories from "@/pages/guest/Categories";
import CategoryPage from "@/pages/guest/CategoryPage";
import ProductView from "@/pages/guest/ProductView";
import AccountSettings from "@/pages/customer/account-settings/AccountSettings";
import Profile from "@/pages/customer/account-settings/Profile";
import ChangePassword from "@/pages/customer/account-settings/ChangePassword";
import CartPage from "@/pages/guest/CartPage";
import OrdersPage from "@/pages/customer/OrdersPage";
import CheckoutPage from "@/pages/customer/checkout/CheckoutPage";
import AddressesSettings from "@/pages/customer/account-settings/AddressesSettings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthenticatedLayout />,
    children: [
      {
        path: "/account-settings",
        element: <AccountSettings />,
        children: [
          {
            index: true,
            element: <Navigate to="profile" replace />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "change-password",
            element: <ChangePassword />,
          },
          {
            path: "addresses",
            element: <AddressesSettings />,
          },
        ],
      },
      {
        path: "/orders",
        element: <OrdersPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/store",
        element: <FrontStore />,
      },
      {
        path: "/sale",
        element: <Sale />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/category-page",
        element: <CategoryPage />,
      },
      {
        path: "/product",
        element: <ProductView />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
