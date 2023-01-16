import React from "react";
import Auth from "../Auth/Auth";
import Navbar from "../navbar/Navbar";
import Logo from "../../../img/flower-manager-logo-transparent.png";

const Header = () => {
  return (
    <header className="app-header">
      <div className="app-logo">
        <img src={Logo} alt="flower-manager-logo" />
      </div>
      <Navbar />
      <Auth />
    </header>
  );
};

export default Header;
