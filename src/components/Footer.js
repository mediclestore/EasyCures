import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>EasyCure. All rights reserved.</p>
        <nav>
          <a href="/about">About Us </a>
          <a href="/contact">Contact</a>
          <a href="/terms">Terms & Conditions</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
