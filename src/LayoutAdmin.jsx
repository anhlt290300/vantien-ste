import React from "react";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import HeaderAdmin from "./parts/HeaderAdmin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LayoutAdmin = () => {
  return (
    <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <HeaderAdmin />
        <div className="flex-1 p-4 min-h-0 overflow-auto">
          <Outlet/>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LayoutAdmin;
