import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const Protection = () => {
  const token = localStorage.getItem("token");

  return <>{token ? <Outlet /> : <Navigate to="/" replace={true} />}</>;
};

export default Protection;
