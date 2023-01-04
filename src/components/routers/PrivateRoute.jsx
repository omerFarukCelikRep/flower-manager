import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthProvider";
import { history } from "../../helpers/HistoryHelper";

const PrivateRoute = ({ children }) => {
  const { auth } = useAuthContext();
  if (!auth) {
    return <Navigate to="/login" state={{ from: history.location }} />;
  }

  return children;
};

export default PrivateRoute;
