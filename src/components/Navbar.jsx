import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <i className="fas fa-building"></i>
            <span>Construction</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
            <Link to="/services" className="nav-link">
              Services
            </Link>

            {/* Blog Dropdown */}
            <div className="nav-dropdown">
              <span className="nav-link dropdown-toggle">
                Blog <i className="fas fa-chevron-down"></i>
              </span>
              <div className="dropdown-menu">
                <Link to="/blog" className="dropdown-item">
                  Blog
                </Link>
                <Link to="/blog/1" className="dropdown-item">
                  Blog Details
                </Link>
              </div>
            </div>

            {/* Pages Dropdown */}
            <div className="nav-dropdown">
              <span className="nav-link dropdown-toggle">
                Pages <i className="fas fa-chevron-down"></i>
              </span>
              <div className="dropdown-menu">
                <Link to="/elements" className="dropdown-item">
                  Elements
                </Link>
                <Link to="/project-details" className="dropdown-item">
                  Project Details
                </Link>
                <Link to="/services-details" className="dropdown-item">
                  Services Detail
                </Link>
              </div>
            </div>

            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </div>

          {/* Contact Button */}
          <Link to="/contact" className="btn btn-primary contact-btn">
            Contact Now
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            style={{
              display: isMobile ? 'block' : 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '5px',
              zIndex: 1001
            }}
          >
            <span
              className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
              style={{
                display: 'block',
                width: '25px',
                height: '3px',
                background: 'white',
                position: 'relative'
              }}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <Link to="/" className="mobile-nav-link" onClick={toggleMobileMenu}>
            Home
          </Link>
          <Link
            to="/about"
            className="mobile-nav-link"
            onClick={toggleMobileMenu}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="mobile-nav-link"
            onClick={toggleMobileMenu}
          >
            Projects
          </Link>
          <Link
            to="/services"
            className="mobile-nav-link"
            onClick={toggleMobileMenu}
          >
            Services
          </Link>
          <Link
            to="/blog"
            className="mobile-nav-link"
            onClick={toggleMobileMenu}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="mobile-nav-link"
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
