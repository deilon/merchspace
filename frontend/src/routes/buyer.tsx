import BuyerLayout from "@/layouts/BuyerLayout";
import AccountSettings from "@/pages/buyer/account-settings/AccountSettings";
import AddressesSettings from "@/pages/buyer/account-settings/AddressesSettings";
import ChangePassword from "@/pages/buyer/account-settings/ChangePassword";
import Profile from "@/pages/buyer/account-settings/Profile";
import BuyerLogin from "@/pages/buyer/BuyerLogin";
import BuyerSignup from "@/pages/buyer/BuyerSignup";
import CheckoutPage from "@/pages/buyer/checkout/CheckoutPage";
import OrdersPage from "@/pages/buyer/OrdersPage";
import { Navigate } from "react-router-dom";

export default [
  {
    path: "/buyer",
    element: <BuyerLayout />,
    children: [
      {
        path: "account-settings",
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
        path: "orders",
        element: <OrdersPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
    ],
  },
  {
    path: "/buyer/login",
    element: <BuyerLogin />,
  },
  {
    path: "/buyer/signup",
    element: <BuyerSignup />,
  },
];
