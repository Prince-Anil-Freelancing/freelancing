import React from 'react';
// import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>We are a team of passionate developers dedicated to creating amazing web experiences.</p>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
