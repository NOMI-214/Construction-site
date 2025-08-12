import React from 'react';
import '../styles/hero.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img src="/images/hero/h1_hero.jpg.webp" alt="Construction Site" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text-container">
          {/* Top text with orange line */}
          <div className="hero-top-text">
            <div className="orange-line"></div>
            <span>HAND CAR WASH AND DETAILING SERVICE</span>
          </div>
          
          {/* Main title */}
          <h1 className="hero-title">
            <span className="advanced-text">ADVANCED</span>
            <div className="construction-container">
              <span className="construction-text">CONSTRUCTION</span>
              <span className="liquid-text">CONSTRUCTION</span>
            </div>
          </h1>
          
          {/* Bottom text with orange line */}
          <div className="hero-bottom-text">
            <div className="orange-line"></div>
            <span>OUR SERVICES</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="hero-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
