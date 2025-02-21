import FeaturesLayout from "@/layouts/FeaturesLayout";
import CartPage from "@/pages/features/cart/CartPage";
import Categories from "@/pages/features/categories/Categories";
import CategoryPage from "@/pages/features/categories/CategoryPage";
import FrontStore from "@/pages/features/FrontStore";
import ProductView from "@/pages/features/ProductView";
import Sale from "@/pages/features/Sale";
import { Navigate } from "react-router-dom";

export default [
  {
    path: "/",
    element: <FeaturesLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/store" replace />,
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
];
