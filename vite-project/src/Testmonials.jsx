import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import "./Testimonials.css"


const Testimonials = () => {
  const testimonials = [
    {
      quote: "Dr. Ayisafarhan's nutrition plan helped me lose 25 pounds and keep it off. His approach is sustainable and realistic.",
      name: "Sarah Johnson",
      role: "Teacher",
      rating: 5
    },
    {
      quote: "After struggling with digestive issues for years, the personalized plan I received made a dramatic difference in just 3 months.",
      name: "Michael Chen",
      role: "Software Engineer",
      rating: 5
    },
    {
      quote: "The best nutritionist I've ever worked with. He listens carefully and creates plans that actually fit my lifestyle.",
      name: "Emma Rodriguez",
      role: "Nurse",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <h2 className="section-title fade-in">Patient Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card fade-in" key={index} style={{ transitionDelay: `${index * 0.2}s` }}>
            <FaQuoteLeft className="quote-icon" />
            <p className="testimonial-text">{testimonial.quote}</p>
            <div className="rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} className="star-icon" />
              ))}
            </div>
            <div className="testimonial-author">
              <h4>{testimonial.name}</h4>
              <p>{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;