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
import Loading from "../Components/Loading";
import Error from "../Components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/latest-models"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/all-models",
        Component: AllModels,
        loader: () => fetch("http://localhost:3000/models"),
        hydrateFallbackElement: <Loading></Loading>,
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
        hydrateFallbackElement: <Loading></Loading>,
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
    errorElement: <Error></Error>,
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
