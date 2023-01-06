import React from "react";
import { useLocation } from "react-router-dom";
import Login from "../../components/app/auth/login/Login";
import Register from "../../components/app/auth/register/Register";
import "./auth.scss";

const Auth = () => {
  const location = useLocation();
  console.log(location.pathname.substring(1));

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
                id="signIn"
                onClick={(e) =>
                  e.target.parentElement.parentElement.parentElement.parentElement.classList.remove(
                    "right-panel-active"
                  )
                }
              >
                Login
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <button
                className="btn"
                id="signUp"
                onClick={(e) =>
                  e.target.parentElement.parentElement.parentElement.parentElement.classList.add(
                    "right-panel-active"
                  )
                }
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
