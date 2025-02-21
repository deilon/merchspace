import SellerLayout from "@/layouts/SellerLayout";
import Dashboard from "@/pages/seller/Dashboard";
import SellerLogin from "@/pages/seller/SellerLogin";
import SellerSignup from "@/pages/seller/SellerSignup";
import { Navigate } from "react-router-dom";

export default [
  {
    path: "/seller",
    element: <SellerLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/seller/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/seller/login",
    element: <SellerLogin />,
  },
  {
    path: "/seller/signup",
    element: <SellerSignup />,
  },
];
