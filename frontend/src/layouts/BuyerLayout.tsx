import Footer from "@/pages/Footer";
import Nav from "@/pages/navbar/Nav";
import { Outlet } from "react-router-dom";

export default function BuyerLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
