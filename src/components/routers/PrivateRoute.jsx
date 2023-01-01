import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import { history } from "../../helpers/HistoryHelper";

const PrivateRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);
  if (!auth) {
    return <Navigate to="/login" state={{ from: history.location }} />;
  }

  return children;
};

export default PrivateRoute;
