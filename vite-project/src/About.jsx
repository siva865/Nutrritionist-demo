import React from 'react';
import { FaAward, FaUniversity, FaUserTie } from 'react-icons/fa';

import"./About.css"


const About = () => {
  return (
    <section id="about" className="about-section" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="about-container">
        <div className="about-image fade-in">
          <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Dr. Ayisafarhan" />
        </div>
        <div className="about-content fade-in">
          <h2 className="section-title">About Dr. Ayisafarhan</h2>
          <p className="about-text">
            With over 15 years of experience in clinical nutrition, Dr. Ayisafarhan is a leading expert in personalized nutrition therapy. His evidence-based approach combines the latest scientific research with practical dietary strategies.
          </p>
          
          <div className="about-features">
            <div className="feature-item">
              <FaAward className="feature-icon" />
              <div>
                <h3>Certified Specialist</h3>
                <p>Board Certified Nutrition Specialist (CNS)</p>
              </div>
            </div>
            
            <div className="feature-item">
              <FaUniversity className="feature-icon" />
              <div>
                <h3>Education</h3>
                <p>PhD in Nutritional Sciences from Harvard University</p>
              </div>
            </div>
            
            <div className="feature-item">
              <FaUserTie className="feature-icon" />
              <div>
                <h3>Experience</h3>
                <p>15+ years helping patients achieve optimal health</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;