import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "./app/context/AuthProvider";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./app/router";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" reverseOrder={false} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
