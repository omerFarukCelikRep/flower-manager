import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthProvider";
import { history } from "../../../helpers/HistoryHelper";

const Header = () => {
  const { auth, setAuth } = useAuthContext();

  const logout = () => {
    setAuth();
    history.navigate("/");
  };
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src="#" alt="flower-manager-logo" />
        </div>
        <div className="navbar-texts">
          <ul>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Products">Products</Link>
            <Link to="/Contact">Contact</Link>
          </ul>
        </div>
        <div className="navbar-button">
          {!auth ? (
            <>
              <Link to="/register">
                <button>Sign In</button>
              </Link>
              <Link to="/login">
                <button>Log In</button>
              </Link>
            </>
          ) : (
            <>
              <button onClick={logout}>Logout</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
