import React from "react";
import Navbar from "../components/Header/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="dark:bg-gray-900">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
