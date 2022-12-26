import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo-part">
        <div className="footer-logo">
          {/* flower-manager logo */}
          <img src="" alt="flower-manager-logo" />
          <h1 className="text-light"> Flower Manager</h1>
        </div>
        <div className="footer-text">
          {/* about flower-manager */}
          <p className="text-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Eu pretium
            nunc sit nulla etiam. Dictum ut in ac interdum nulla nec. Sit
            iaculis non libero, quis. Porttitor aliquam nisl adipiscing amet
            felis viverra augue pharetra. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
        <div className="footer-contact text-light">
          {/* flower manager contact */}
          <h5>
            Evliya Çelebi Mah. İstasyon Cad. Miraç Sk. No: 11 Tuzla /
            İSTANBUL-TURKEY
          </h5>
          <h5>+(90) 533-310-38-24</h5>
          <h5> flowermanager@gmail.com</h5>
        </div>
      </div>
      <hr className="line" color="grey" />
      <div className="footer-texts">
        {/* footer navbar */}
        <ul>
          <li className="text-light">Home</li>
          <li className="text-light">About</li>
          <li className="text-light">Products</li>
          <li className="text-light">Users</li>
        </ul>
        <div className="copy-right-text text-light">
          <h5>© Copyright {new Date().getFullYear()}</h5>
          <h5>Privacy policy</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
