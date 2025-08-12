import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AboutHero.css'; // You’ll create this CSS file below

const BlogHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-overlay"></div>
      <div className="about-hero-content">
        <h1 className="about-hero-title">BLOG PAGE</h1>
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Blog Page</span>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
