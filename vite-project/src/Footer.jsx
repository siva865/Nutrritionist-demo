import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "./Footer.css"


const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-about">
          <h3>Dr. Ayisafarhan</h3>
          <p>Providing evidence-based nutritional guidance to help you achieve optimal health and wellness.</p>
          <div className="social-links">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h3>Contact Info</h3>
          <ul>
            <li>123 Wellness Avenue, Health City</li>
            <li>Phone: (123) 456-7890</li>
            <li>Email: info@drayisafarhan.com</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Dr. Ayisafarhan. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;