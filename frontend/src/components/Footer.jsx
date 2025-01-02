import React from 'react';
// import './Footer.css';;
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src={logo} alt="" />
          <p>We are a team of passionate developers dedicated to creating amazing web experiences.</p>
        </div>
       
      </div>
      <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: <a href="">kantariyaanil63@gmail.com <br />dholaprince5@gmail.com</a></p>
        </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} P&A Freelancers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
