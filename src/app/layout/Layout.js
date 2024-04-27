import React from "react";
import Navbar from "../components/Header/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="dark:bg-gray-900">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
