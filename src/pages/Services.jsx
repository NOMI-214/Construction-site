import React from 'react';
import '../styles/services.css';

const services = [
  {
    id: 1,
    title: 'Engineering techniques & implementation',
    image: '../images/gallery/project1.png.webp',
  },
  {
    id: 2,
    title: 'Engineering techniques & implementation',
    image: '../images/gallery/project2.png.webp',
  },
  {
    id: 3,
    title: 'Engineering techniques & implementation',
    image: '../images/gallery/project3.png.webp',
  },
  {
    id: 4,
    title: 'Engineering techniques & implementation',
    image: '../images/gallery/project4.png.webp',
  },
  {
    id: 5,
    title: 'Engineering techniques & implementation',
    image: '../images/gallery/project5.png.webp',
  },
  {
    id: 6,
    title: 'Engineering techniques & implementation',
    image: '../images/gallery/project6.png.webp',
  },
];

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero__background">
          <div className="services-hero__overlay"></div>
        </div>
        <div className="services-hero__content">
          <h1 className="services-hero__title">SERVICES</h1>
          <div className="services-hero__breadcrumb">
            <span>HOME</span>
            <span className="separator">/</span>
            <span>SERVICES</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="services-section">
        <div className="services-section__container">
          <h2 className="services-section__heading">
            <span className="services-section__heading-bg">SERVICES</span>
            OUR SERVICES
          </h2>
          <div className="services-grid">
            {services.map((service, idx) => (
              <div className="service-card" key={service.id}>
                <div className="service-card__image-wrapper">
                  <img src={service.image} alt={service.title} className="service-card__image" />
                </div>
                <div className="service-card__content">
                  <h3 className="service-card__title">{service.title}</h3>
                  <div className="service-card__actions">
                    <button className="service-card__readmore">Read More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
