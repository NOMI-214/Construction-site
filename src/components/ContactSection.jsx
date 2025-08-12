import React from "react";
import "../styles/ContactSection.css";

const ContactPageSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-content">
          {/* Map Container with OpenStreetMap */}
          <div className="map-container">
            <div className="custom-map">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=71.9508%2C34.1523%2C72.1508%2C34.2523&layer=mapnik&marker=34.2023%2C72.0508"
                title="Mardan, Pakistan Location"
                className="osm-map"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
              <div className="map-overlay">
                <div className="location-info">
                  <i className="fas fa-map-marker-alt"></i>
                  <h3>Mardan, Pakistan</h3>
                  <p>Khyber Pakhtunkhwa</p>
                  <a
                    href="https://maps.google.com/?q=Mardan,Pakistan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-link-btn"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form and Details */}
          <div className="contact-details-container">
            <div className="contact-form-container">
              <h2 className="form-title">Get in Touch</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <textarea
                    className="form-control message-input"
                    placeholder="Enter Message"
                    rows="6"
                    required
                  ></textarea>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Subject"
                    required
                  />
                </div>
                <button type="submit" className="send-btn">
                  SEND MESSAGE
                </button>
              </form>
            </div>

            <div className="contact-info-container">
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Our Location</h4>
                    <p>Mardan, Khyber Pakhtunkhwa, Pakistan</p>
                    <p>Main Office: City Center, Mardan</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Phone Numbers</h4>
                    <p>+92 300 123 4567</p>
                    <p>+92 301 987 6543</p>
                    <p>Mon to Fri 9am to 6pm</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Email Address</h4>
                    <p>info@construction.com</p>
                    <p>support@construction.com</p>
                    <p>Send us your query anytime!</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Working Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageSection;
