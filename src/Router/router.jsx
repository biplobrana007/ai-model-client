import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllModels from "../Pages/AllModels";
import AddModel from "../Pages/AddModel";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ModelDetails from "../Pages/ModelDetails";
import UpdateModel from "../Pages/UpdateModel";
import MyModels from "../Pages/MyModels";
import PurchasedModels from "../Pages/PurchasedModels";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/latest-models"),
      },
      {
        path: "/all-models",
        Component: AllModels,
        loader: () => fetch("http://localhost:3000/models"),
      },
      {
        path: "/add-model",
        element: (
          <PrivateRouter>
            <AddModel></AddModel>
          </PrivateRouter>
        ),
      },
      {
        path: "/model-details/:id",
        element: (
          <PrivateRouter>
            <ModelDetails></ModelDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/models/${params.id}`),
      },
      {
        path: "/update-model/:id",
        element: <UpdateModel></UpdateModel>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/models/${params.id}`),
      },
      {
        path: "/my-models",
        element: <MyModels></MyModels>,
      },
      {
        path: "/my-purchased-models",
        element: <PurchasedModels></PurchasedModels>,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
]);

export default router;
