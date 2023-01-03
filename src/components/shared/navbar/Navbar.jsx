import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Products">Products</Link>
          <Link to="/Contact">Contact</Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
