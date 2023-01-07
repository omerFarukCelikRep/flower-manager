import React from "react";
import { useLocation } from "react-router-dom";
import Login from "../../components/app/auth/login/Login";
import Register from "../../components/app/auth/register/Register";
import { history } from "../../helpers/HistoryHelper";
import "./auth.scss";

const Auth = () => {
  const location = useLocation();

  const containerClassName = `auth-container ${
    location.pathname.substring(1).toLowerCase() === "register"
      ? "right-panel-active"
      : ""
  }`;
  return (
    <>
      <div className={containerClassName}>
        <Register />
        <Login />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <button
                className="btn"
                onClick={(e) => {
                  e.target.parentElement.parentElement.parentElement.parentElement.classList.remove(
                    "right-panel-active"
                  );

                  history.navigate("login");
                }}
              >
                Login
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <button
                className="btn"
                onClick={(e) => {
                  e.target.parentElement.parentElement.parentElement.parentElement.classList.add(
                    "right-panel-active"
                  );

                  history.navigate("register");
                }}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
