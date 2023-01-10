import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthProvider";
import { history } from "../../helpers/HistoryHelper";

const RequireAuth = ({ children }) => {
  const { auth } = useAuthContext();
  if (!auth) {
    return <Navigate to="/login" state={{ from: history.location }} replace />;
  }

  return children;
};

export default RequireAuth;
