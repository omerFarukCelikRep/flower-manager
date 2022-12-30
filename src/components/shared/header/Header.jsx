import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
          <Link to="/register">
            <button>Sign In</button>
          </Link>
          <button>Log In</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
