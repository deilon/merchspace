import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";

import BuyerRoutes from "./buyer";
import SellerRoutes from "./seller";
import FeaturesRoutes from "./features";

const router = createBrowserRouter([
  ...BuyerRoutes,
  ...FeaturesRoutes,
  ...SellerRoutes,
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
