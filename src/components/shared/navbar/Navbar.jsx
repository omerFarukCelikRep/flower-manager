import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthProvider";

const Navbar = () => {
  const { isAdmin } = useAuthContext();
  return (
    <>
      <nav className="navbar">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/flowers">Flowers</Link>
          {isAdmin ? <Link to="/users">Users</Link> : ""}
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
