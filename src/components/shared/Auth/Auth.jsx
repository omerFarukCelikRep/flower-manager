import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthProvider";
import { history } from "../../../helpers/HistoryHelper";

const Auth = () => {
  const { auth, setAuth } = useAuthContext();

  const logout = () => {
    setAuth();
    history.navigate("/");
  };
  return (
    <>
      <div className="auth-buttons">
        {!auth ? (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        ) : (
          <>
            <a onClick={logout}>Logout</a>
          </>
        )}
      </div>
    </>
  );
};

export default Auth;
