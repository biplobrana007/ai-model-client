import React, { use } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../Components/Loading";

const PrivateRouter = ({ children }) => {
  const { user, authLoading } = use(AuthContext);
  const location = useLocation();
  if (authLoading) {
    return <Loading></Loading>;
  }
  return user ? (
    children
  ) : (
    <Navigate state={location.pathname} to="/auth/login"></Navigate>
  );
};

export default PrivateRouter;
