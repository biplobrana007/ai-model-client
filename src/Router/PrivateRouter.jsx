import React, { use } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRouter = ({ children }) => {
  const { user } = use(AuthContext);
  const location = useLocation();
  return user ? (
    children
  ) : (
    <Navigate state={location.pathname} to="/auth/login"></Navigate>
  );
};

export default PrivateRouter;
