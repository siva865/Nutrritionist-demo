import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import "./contact.css"


const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title fade-in">Contact Us</h2>
      <div className="contact-container">
        <div className="contact-info fade-in">
          <h3>Get In Touch</h3>
          
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h4>Location</h4>
              <p>123 Wellness Avenue, Health City, HC 12345</p>
            </div>
          </div>
          
          <div className="info-item">
            <FaPhone className="info-icon" />
            <div>
              <h4>Phone</h4>
              <p>(123) 456-7890</p>
            </div>
          </div>
          
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h4>Email</h4>
              <p>info@drayisafarhan.com</p>
            </div>
          </div>
          
          <div className="info-item">
            <FaClock className="info-icon" />
            <div>
              <h4>Working Hours</h4>
              <p>Monday - Friday: 9am - 5pm</p>
              <p>Saturday: 10am - 2pm</p>
            </div>
          </div>
        </div>
        
        <form className="contact-form fade-in">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Your Phone" />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;