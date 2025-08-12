import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/services.css';
import servicess1 from '../images/Service/servicess1.png.webp';
import servicess2 from '../images/Service/servicess2.png.webp';
import servicess3 from '../images/Service/servicess3.png.webp';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Engineering Techniques & Implementation",
      description: "Advanced engineering solutions for complex construction projects with cutting-edge technology and innovative approaches.",
      image: servicess1,
      icon: "fas fa-cogs"
    },
    {
      id: 2,
      title: "Architecture & Design Planning",
      description: "Comprehensive architectural design services from concept to completion, ensuring functionality and aesthetic excellence.",
      image: servicess2,
      icon: "fas fa-drafting-compass"
    },
    {
      id: 3,
      title: "Construction Management",
      description: "Professional project management services ensuring timely delivery, quality control, and cost-effective solutions.",
      image: servicess3,
      icon: "fas fa-hard-hat"
    }
  ];

  return (
    <section className="section services-section">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Our Services</p>
          <h2 className="section-title">OUR SERVICES</h2>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card card">
              <div className="service-image image-hover">
                <img src={service.image} alt={service.title} />
                <div className="service-overlay">
                  <i className={service.icon}></i>
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <Link to={`/services/${service.id}`} className="btn btn-primary service-btn">
                  Read More <i className="fas fa-plus"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 