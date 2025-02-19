import Footer from "@/components/Footer";
import Nav from "@/components/navbar/Nav";
import { Outlet } from "react-router-dom";

export default function AuthenticatedLayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
