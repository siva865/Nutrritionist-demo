import React from 'react';
import { FaBars, FaTimes, FaUserMd, FaPhone, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaComments } from 'react-icons/fa';
import"./Navbar.css"


const Navbar = ({ isMenuOpen, toggleMenu }) => {
  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <FaUserMd className="logo-icon" />
            <span className="doctor-name">Dr. Ayisafarhan</span>
          </div>
          
          <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={toggleMenu}><FaHome /> Home</a>
            <a href="#services" onClick={toggleMenu}><FaUtensils /> Services</a>
            <a href="#about" onClick={toggleMenu}><FaBook /> About</a>
            <a href="#testimonials" onClick={toggleMenu}><FaComments /> Testimonials</a>
            <a href="#contact" onClick={toggleMenu}><FaPhone /> Contact</a>
          </nav>
          
          <div className="nav-cta">
            <a href="#contact" className="cta-button">
              <FaCalendarAlt /> Book Appointment
            </a>
          </div>
          
          <div className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;