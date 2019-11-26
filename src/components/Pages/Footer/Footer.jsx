import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-body">
          <div className="footer-body-logo">
            <img src={"/image/logo.png"} alt="logo" />
            <p>shopy made by Alex</p>
          </div>
          <div className="footer-body-info">
            <h4>Payment Methods</h4>
            <ul>
              <li>Privat24</li>
              <li>Monobank</li>
              <li>Alfabank</li>
              <li>PayPal</li>
              <li>Qiwi</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
