import React from "react";
import Auth from "../Auth/Auth";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <header className="app-header">
      <div className="app-logo">
        <img src="#" alt="flower-manager-logo" />
      </div>
      <Navbar />
      <Auth />
    </header>
  );
};

export default Header;
