import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthProvider";
import { history } from "../../helpers/HistoryHelper";

const RequireRole = ({ children, role }) => {
  const { auth } = useAuthContext();
  if (
    !auth &&
    !auth?.roles?.some((authRole) => authRole.toLower() === role.toLower())
  ) {
    return (
      <Navigate to="/unauthorized" state={{ from: history.location }} replace />
    );
  }

  return children;
};

export default RequireRole;
