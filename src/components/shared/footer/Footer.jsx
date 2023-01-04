import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="" alt="flower-manager-logo" />
          <h2 className="text-light">Flower Manager</h2>
        </div>
        <div className="footer-text">
          <p className="text-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Eu pretium
            nunc sit nulla etiam. Dictum ut in ac interdum nulla nec. Sit
            iaculis non libero, quis. Porttitor aliquam nisl adipiscing amet
            felis viverra augue pharetra. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
        <div className="footer-contact text-light">
          <p>
            Evliya Çelebi Mah. İstasyon Cad. Miraç Sk. No: 11 Tuzla /
            İSTANBUL-TURKEY
          </p>
          <p>+(90) 533-310-38-24</p>
          <p> flowermanager@gmail.com</p>
        </div>
      </div>
      <hr className="line" color="grey" />
      <div className="footer-nav">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/users">Users</Link>
        </ul>
        <div className="copy-right-text text-light">
          <b>© Copyright {new Date().getFullYear()}</b>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
