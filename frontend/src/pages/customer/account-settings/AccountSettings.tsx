import { Separator } from "@radix-ui/react-separator";
import Nav from "../../Nav";
import { SidebarNav } from "./sidebar-nav";
import { Outlet } from "react-router-dom";

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/account-settings/profile",
  },
  {
    title: "Change Password",
    href: "/account-settings/change-password",
  },
];

export default function AccountSettings() {
  return (
    <>
      <Nav />
      <div className="container max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 my-5">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Account Settings
        </h2>
        <p className="leading-7 text-gray-500">
          Manage your profile and password.
        </p>
        <div className="hidden space-y-6 pb-16 md:block">
          <Separator />
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            <aside className="lg:w-1/5">
              <SidebarNav items={sidebarNavItems} />
            </aside>
            <div className="flex-1 lg:max-w-2xl">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
