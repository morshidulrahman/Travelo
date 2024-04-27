import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AddTourist from "../pages/AddTourist";
import AllTourist from "../pages/AllTourist";
import MyList from "../pages/MyList";
import PrivateRoute from "./PrivateRoute";
import TouristDetails from "../pages/TouristDetails";
import UpdateTourists from "../pages/UpdateTourists";
import AllCourty from "../pages/AllCourty";

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
        path: "/allcountry/:country",
        element: <AllCourty />,
      },
      {
        path: "/addtourist",
        element: (
          <PrivateRoute>
            <AddTourist />
          </PrivateRoute>
        ),
      },
      {
        path: "/tourist/:id",
        element: (
          <PrivateRoute>
            <TouristDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/mylist",
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
      },
      {
        path: "/edit/:id",
        element: (
          <PrivateRoute>
            <UpdateTourists />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
