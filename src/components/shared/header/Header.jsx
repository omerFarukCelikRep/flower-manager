import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/AuthProvider";

const Header = () => {
  const { auth } = useContext(AuthContext);
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
              <Link to="/logout">
                <button>Logout</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
