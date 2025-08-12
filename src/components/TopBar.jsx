import React from 'react';
import '../styles/topbar.css';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar-content">
          <div className="topbar-left">
            <span className="topbar-item">
              <i className="fas fa-phone"></i>
              00(23) 567-890
            </span>
            <span className="topbar-item">
              <i className="fas fa-envelope"></i>
              info@domain.com
            </span>
            <span className="topbar-item">
              <i className="fas fa-clock"></i>
              Mon - Sat: 8:00 - 17:30, Sunday: CLOSED
            </span>
          </div>
          <div className="topbar-right">
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-google-plus-g"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar; 