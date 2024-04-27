import React from "react";
import { useContext } from "react";
import { UserAuth } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(UserAuth);
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }

  if (user) {
    return children;
  }

  return (
    <Navigate to="/login" state={location.pathname || "/"} replace></Navigate>
  );
};

export default PrivateRoute;
