import React, { useEffect } from 'react';
import { FaAppleAlt, FaHeartbeat, FaRunning } from 'react-icons/fa';
import"./Hero.css"
const Hero = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="hero-section" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="hero-container">
        <div className="hero-content fade-in">
          <h1>Personalized Nutrition Plans</h1>
          <p className="subtitle">by Dr. Ayisafarhan</p>
          <p>Transform your health with science-backed nutrition advice tailored to your unique needs.</p>
          <div className="hero-icons">
            <div className="icon-item">
              <FaAppleAlt className="icon" />
              <span>Balanced Diet</span>
            </div>
            <div className="icon-item">
              <FaHeartbeat className="icon" />
              <span>Heart Health</span>
            </div>
            <div className="icon-item">
              <FaRunning className="icon" />
              <span>Active Lifestyle</span>
            </div>
          </div>
          <a href="#contact" className="cta-button">Get Your Plan Today</a>
        </div>
        <div className="hero-image fade-in">
          <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Healthy food" />
        </div>
      </div>
    </section>
  );
};

export default Hero;