import React from "react";
import { Link } from "react-router-dom";
import "../styles/ContactHero.css";

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div className="contact-hero-overlay"></div>
      <div className="contact-hero-content">
        <h1 className="contact-hero-title">CONTACT</h1>
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-link">
            HOME
          </Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">CONTACT</span>
        </div>
        <div className="hero-line"></div>
      </div>
    </section>
  );
};

export default ContactHero;
