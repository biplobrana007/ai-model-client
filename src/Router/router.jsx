import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllModels from "../Pages/AllModels";
import AddModel from "../Pages/AddModel";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/all-models",
        Component: AllModels,
      },
      {
        path: "/add-model",
        Component: AddModel,
      },
    ],
  },
]);

export default router;
