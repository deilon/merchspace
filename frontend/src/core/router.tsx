import { createBrowserRouter, Navigate } from "react-router-dom";
import BuyerLayout from "@/layouts/BuyerLayout";
import FeaturesLayout from "@/layouts/FeaturesLayout";
import BuyerLogin from "../pages/buyer/BuyerLogin";
import BuyerSignup from "../pages/buyer/BuyerSignup";
import FrontStore from "@/pages/features/FrontStore";
import Sale from "@/pages/features/Sale";
import Categories from "@/pages/features/categories/Categories";
import CategoryPage from "@/pages/features/categories/CategoryPage";
import ProductView from "@/pages/features/ProductView";
import AccountSettings from "@/pages/buyer/account-settings/AccountSettings";
import Profile from "@/pages/buyer/account-settings/Profile";
import ChangePassword from "@/pages/buyer/account-settings/ChangePassword";
import CartPage from "@/pages/features/cart/CartPage";
import OrdersPage from "@/pages/buyer/OrdersPage";
import CheckoutPage from "@/pages/buyer/checkout/CheckoutPage";
import AddressesSettings from "@/pages/buyer/account-settings/AddressesSettings";
import SellerLogin from "@/pages/seller/SellerLogin";
import SellerSignup from "@/pages/seller/SellerSignup";
import NotFound from "../pages/NotFound";
import SellerLayout from "@/layouts/SellerLayout";
import Dashboard from "@/pages/seller/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BuyerLayout />,
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
    element: <FeaturesLayout />,
    children: [
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
    path: "/buyer/login",
    element: <BuyerLogin />,
  },
  {
    path: "/buyer/signup",
    element: <BuyerSignup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },

  // Sellers routes
  {
    path: "/seller/login",
    element: <SellerLogin />,
  },
  {
    path: "/seller/signup",
    element: <SellerSignup />,
  },
  {
    path: "/",
    element: <SellerLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/seller/dashboard" replace />,
      },
      {
        path: "/seller/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
