import React from "react";
import "../styles/footer.css";
import mapImg from "../assets/images/gallery/map-footer.png.webp"; // Place your map image in src folder

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1 */}
        <div className="footer-col">
          <h3 className="footer-title">About Us</h3>
          <p className="footer-text">
            We provide high-quality services to help your business grow and reach more customers globally.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3 className="footer-title">Contact</h3>
          <p>Email: <a href="mailto:nomikhan201460@gmail.com">nomikhan201460@gmail.com</a></p>
          <p>Email: <a href="mailto:inouman2014@gmail.com">inouman2014@gmail.com</a></p>
          <p>Phone: <a href="tel:+923482014604">+92 348 2014604</a></p>
        </div>

        {/* Column 4 - Map */}
        <div className="footer-col map-col">
          <h3 className="footer-title">Location</h3>
          <img src={mapImg} alt="Location Map" className="map-image" />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Muhammad Nouman. All rights reserved.</p>
      </div>
    </footer>
  );
}
