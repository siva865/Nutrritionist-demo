import React from 'react';
import { FaWeight, FaLeaf, FaBaby, FaHeart, FaBrain, FaAllergies } from 'react-icons/fa';
import "./services.css"

const Services = () => {
  const services = [
    {
      icon: <FaWeight size={40} />,
      title: "Weight Management",
      description: "Personalized plans for weight loss or gain based on your body type and goals."
    },
    {
      icon: <FaLeaf size={40} />,
      title: "Plant-Based Nutrition",
      description: "Transition to a plant-based diet with balanced meal plans and recipes."
    },
    {
      icon: <FaBaby size={40} />,
      title: "Pediatric Nutrition",
      description: "Specialized nutrition plans for children's growth and development."
    },
    {
      icon: <FaHeart size={40} />,
      title: "Heart Health",
      description: "Dietary strategies to improve cardiovascular health and cholesterol levels."
    },
    {
      icon: <FaBrain size={40} />,
      title: "Brain Health",
      description: "Nutrition plans to enhance cognitive function and mental clarity."
    },
    {
      icon: <FaAllergies size={40} />,
      title: "Food Allergies",
      description: "Customized meal plans for managing food allergies and intolerances."
    }
  ];

  return (
    <section id="services" className="services-section">
      <h2 className="section-title fade-in">Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card fade-in" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
            <div className="service-icon" style={{ color: '#084734' }}>
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;