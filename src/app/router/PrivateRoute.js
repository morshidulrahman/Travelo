import React from "react";
import { useContext } from "react";
import { UserAuth } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(UserAuth);
  const location = useLocation();

  if (loading) {
    return <h1>loading....</h1>;
  }

  if (user) {
    return children;
  }

  return (
    <Navigate to="/login" state={location.pathname || "/"} replace></Navigate>
  );
};

export default PrivateRoute;
