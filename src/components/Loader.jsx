import React from 'react';
import '../styles/loader.css';

const Loader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <img 
          src="/images/Logo/loder-logo.png.webp" 
          alt="Loading..." 
          className="loader-image"
        />
        <div className="loader-spinner"></div>
      </div>
    </div>
  );
};

export default Loader;
