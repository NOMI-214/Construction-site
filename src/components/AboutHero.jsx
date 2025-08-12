import React from "react";
import { Link } from "react-router-dom";
import "../styles/AboutHero.css"; // You’ll create this CSS file below

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-overlay"></div>
      <div className="about-hero-content">
        <h1 className="about-hero-title">ABOUT US</h1>
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-link">
            HOME
          </Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">ABOUT</span>
        </div>
      </div>
      <div className="hero-background-elements">
        <div className="crane-element"></div>
        <div className="worker-element"></div>
      </div>
    </section>
  );
};

export default AboutHero;
