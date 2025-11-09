import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";

const AuthLayout = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <Toaster></Toaster>
    </>
  );
};

export default AuthLayout;
