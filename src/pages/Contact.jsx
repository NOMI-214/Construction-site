import React, { useState } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">CONTACT</h1>
          <div className="breadcrumb">
            <a href="/" className="breadcrumb-link">HOME</a>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">CONTACT</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="contact-content">
        <div className="container">
          {/* Map Section */}
          <section className="map-section">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.715!2d-118.0807!3d34.0806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2d8c8c8c8c8c8%3A0x8c8c8c8c8c8c8c8c!2sRosemead%2C%20CA%2091770!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Contact Location Map"
              ></iframe>
            </div>
          </section>

          {/* Contact Form and Details Section */}
          <section className="contact-section">
            <div className="contact-layout">
              {/* Left Column - Contact Form */}
              <div className="contact-form-column">
                <h2 className="contact-form-title">Get in Touch</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Enter Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      rows="6"
                      required
                    ></textarea>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Enter Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <button type="submit" className="send-btn">
                    SEND
                  </button>
                </form>
              </div>

              {/* Right Column - Contact Details */}
              <div className="contact-details-column">
                <div className="contact-details">
                  <div className="contact-detail-item">
                    <div className="contact-icon">
                      <i className="fas fa-home"></i>
                    </div>
                    <div className="contact-info">
                      <h4>Location</h4>
                      <p>Buttonwood, California. Rosemead, CA 91770</p>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="contact-icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="contact-info">
                      <h4>Phone</h4>
                      <p>+1253 565 2365</p>
                      <p className="contact-subtitle">Mon to Fri 9am to 6pm</p>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="contact-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="contact-info">
                      <h4>Email</h4>
                      <p>support@colorlib.com</p>
                      <p className="contact-subtitle">Send us your query anytime!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;