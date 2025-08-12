import React, { useState } from "react";
import "../styles/ServicesDetails.css";

// Import images
import heroImage from "../images/hero/h1_hero.jpg.webp";
import service1Image from "../images/gallery/project1.png.webp";
import service2Image from "../images/gallery/project2.png.webp";
import service3Image from "../images/gallery/project3.png.webp";

const ServicesDetails = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const serviceData = {
    title: "Construction Management Services",
    subtitle:
      "Professional project management for successful construction delivery",
    description:
      "Our comprehensive construction management services ensure your project is completed on time, within budget, and to the highest quality standards. We handle every aspect from planning to completion.",
    features: [
      {
        icon: "🏗️",
        title: "Project Planning",
        description:
          "Comprehensive planning and scheduling to ensure project success",
      },
      {
        icon: "📊",
        title: "Cost Management",
        description:
          "Budget control and cost optimization throughout the project lifecycle",
      },
      {
        icon: "⏰",
        title: "Timeline Management",
        description:
          "Efficient scheduling and deadline adherence for timely delivery",
      },
      {
        icon: "🔍",
        title: "Quality Control",
        description: "Rigorous quality standards and inspection processes",
      },
      {
        icon: "👥",
        title: "Team Coordination",
        description:
          "Effective communication and coordination between all stakeholders",
      },
      {
        icon: "📋",
        title: "Risk Management",
        description: "Proactive identification and mitigation of project risks",
      },
    ],
    specifications: {
      "Project Types": [
        "Residential",
        "Commercial",
        "Industrial",
        "Infrastructure",
      ],
      "Service Areas": [
        "Planning",
        "Design",
        "Construction",
        "Inspection",
        "Maintenance",
      ],
      "Team Size": [
        "5-10 professionals",
        "10-20 professionals",
        "20+ professionals",
      ],
      Timeline: ["3-6 months", "6-12 months", "12+ months"],
      "Budget Range": ["$100K - $500K", "$500K - $2M", "$2M+"],
    },
    details: {
      "Service Duration": "12-24 months",
      "Team Members": "15+ professionals",
      "Success Rate": "98%",
      "Client Satisfaction": "4.9/5",
      Certifications: "ISO 9001, LEED Certified",
    },
  };

  const relatedServices = [
    {
      image: service1Image,
      category: "Design & Planning",
      title: "Architectural Design Services",
      description:
        "Professional architectural design and planning for your construction projects.",
      location: "New York, NY",
    },
    {
      image: service2Image,
      category: "Construction",
      title: "General Contracting",
      description:
        "Full-service general contracting for commercial and residential projects.",
      location: "Los Angeles, CA",
    },
    {
      image: service3Image,
      category: "Renovation",
      title: "Renovation & Remodeling",
      description:
        "Expert renovation and remodeling services for existing structures.",
      location: "Chicago, IL",
    },
  ];

  return (
    <div className="services-details">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="service-hero-content">
                <h1 className="service-hero-title">{serviceData.title}</h1>
                <p className="service-hero-subtitle">{serviceData.subtitle}</p>
                <p className="service-hero-description">
                  {serviceData.description}
                </p>
                <div className="service-hero-buttons">
                  <a
                    href="#contact"
                    className="service-btn service-btn-primary"
                  >
                    Get Started
                  </a>
                  <a
                    href="#overview"
                    className="service-btn service-btn-outline"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-hero-image">
                <img src={heroImage} alt="Construction Management" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section id="overview" className="service-overview">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-content">
                <h2>Service Overview</h2>
                <p>{serviceData.description}</p>

                <div className="service-features">
                  <h3>Key Features</h3>
                  <div className="features-grid">
                    {serviceData.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <div className="feature-icon">{feature.icon}</div>
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="service-specifications">
                  <h3>Service Specifications</h3>
                  <div className="specs-grid">
                    {Object.entries(serviceData.specifications).map(
                      ([category, items]) => (
                        <div key={category} className="spec-category">
                          <h4>{category}</h4>
                          <div>
                            {items.map((item, index) => (
                              <div key={index} className="spec-checkbox">
                                <input
                                  type="checkbox"
                                  id={`${category}-${index}`}
                                  name={`${category}-${index}`}
                                />
                                <label htmlFor={`${category}-${index}`}>
                                  {item}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="service-sidebar">
                <div className="service-card">
                  <h3>Service Details</h3>
                  <div className="service-info">
                    {Object.entries(serviceData.details).map(
                      ([label, value]) => (
                        <div key={label} className="info-item">
                          <span className="label">{label}</span>
                          <span className="value">{value}</span>
                        </div>
                      )
                    )}
                  </div>
                  <a
                    href="#contact"
                    className="service-btn service-btn-primary full-width"
                  >
                    Request Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="related-services">
        <div className="container">
          <div className="section-header">
            <h2>Related Services</h2>
            <p>Explore our other construction and management services</p>
          </div>
          <div className="services-grid">
            {relatedServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <span className="service-category">{service.category}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-location">
                    <i className="fas fa-map-marker-alt"></i> {service.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Get in touch with our team to discuss your construction management
              needs
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="service-btn service-btn-primary">
                Contact Us
              </a>
              <a href="#overview" className="service-btn service-btn-outline">
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesDetails;
