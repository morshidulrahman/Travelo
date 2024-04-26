import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AddTourist from "../pages/AddTourist";
import AllTourist from "../pages/AllTourist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/alltorist",
        element: <AllTourist />,
      },
      {
        path: "/addtourist",
        element: <AddTourist />,
      },
    ],
  },
]);

export default router;
