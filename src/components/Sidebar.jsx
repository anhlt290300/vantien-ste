import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { FcBullish } from "react-icons/fc";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../assets/static-data/sidebar";
import logo from "../assets/picture/logo.png";

const Sidebar = () => {
  return (
    <div className="bg-neutral-900 w-60 p-3 flex flex-col">
      <div className="flex items-center px-1 py-3">
        <span className="text-neutral-200 text-lg w-fit">
          <img src={logo} alt={logo} className="w-full" />
        </span>
      </div>
      <div className="py-8 flex flex-1 flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => {
          return <SidebarLink key={link.key} link={link} />;
        })}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => {
          return <SidebarLink key={link.key} link={link} />;
        })}
        <a href="/" className="cursor-pointer text-red-500 flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base">
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </a>
      </div>
    </div>
  );
};

const SidebarLink = ({ link }) => {
  const { pathname } = useLocation();
  
  return (
    <Link
      to={link.path}
      className={
        pathname === link.path
          ? "flex items-center gap-2  px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base font-semibold bg-neutral-700 text-white-primary"
          : "flex items-center gap-2  px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base text-white-primary font-semibold"
      }
    >
      <span className="text-xl"></span>
      {link.icon}
      {link.label}
    </Link>
  );
};

export default Sidebar;
