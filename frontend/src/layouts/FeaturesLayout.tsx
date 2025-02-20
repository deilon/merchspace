import Nav from "@/pages/navbar/Nav";
import { Outlet } from "react-router-dom";
import Footer from "@/pages/Footer";

export default function FeaturesLayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
