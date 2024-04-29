import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import {
  AddTourist,
  AllCourty,
  AllTourist,
  Home,
  Login,
  MyList,
  Register,
  TouristDetails,
  UpdateTourists,
} from "../pages";
import PrivateRoute from "./PrivateRoute";

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
