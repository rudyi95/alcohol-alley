import React from "react";
import { Route, RouteProps, Navigate } from "react-router-dom";

const PrivateRoute: React.FC<RouteProps> = ({ ...rest }) => {
  const isAuthenticated = localStorage.getItem("token") !== null;

  return isAuthenticated ? <Route {...rest} /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
