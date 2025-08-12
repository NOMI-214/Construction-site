import React from "react";
import { Link } from "react-router-dom";
import "../styles/AboutPage.css";
import david1 from "../images/David/david_1.png.webp";
import Testimonial from "../components/Testimonial";
import Team from "../components/Team";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1 className="about-hero-title">ABOUT US</h1>
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">
              HOME
            </Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">PRODUCT</span>
          </div>
        </div>
        <div className="hero-background-elements">
          <div className="crane-element"></div>
          <div className="worker-element"></div>
        </div> 
      </section>

      {/* About Content Section */}
      <section className="section about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <div className="section-header text-left">
                <p className="section-subtitle">About</p>
                <h2 className="section-title">WHO WE ARE</h2>
              </div>

              <div className="about-description">
                <p>
                  Mollit anim laborum duis au dolor in voluptcate velit ess
                  cillum dolore eu lore dsu quality mollit anim laborumuis au
                  dolor in voluptate velit cillu.
                </p>
                <p>
                  Mollit anim laborum duis au dolor in voluptcate velit ess
                  cillum dolore eu lore dsu quality mollit anim laborumuis au
                  dolor in voluptate velit cillu.
                </p>
              </div>

              <Link to="/about" className="about-btn">
                <span>READ MORE</span>
              </Link>
            </div>

            <div className="about-image">
              <div className="image-container">
                <img src={david1} alt="Construction Worker" />
                <div className="experience-badge">
                  <span className="years">1994</span>
                  <span className="text">SINCE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <Testimonial />

      {/* Team Section */}
      <Team />
    </>
  );
};

export default About;
