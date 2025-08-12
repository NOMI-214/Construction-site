import React, { useState } from "react";
import "../styles/testimonial.css";

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [fade, setFade] = useState(true); // for fade animation

  const testimonials = [
    {
      id: 1,
      quote:
        "Working with this construction company was an absolute pleasure...",
      name: "John Doe",
      position: "CEO & Founder",
      company: "Tech Solutions Inc.",
    },
    {
      id: 2,
      quote:
        "The team's professionalism and expertise made our construction project seamless...",
      name: "Sarah Johnson",
      position: "Project Manager",
      company: "Global Enterprises",
    },
    {
      id: 3,
      quote: "Outstanding service from start to finish...",
      name: "Michael Brown",
      position: "Director",
      company: "Innovation Corp",
    },
  ];

  const changeTestimonial = (direction) => {
    setFade(false); // trigger fade-out
    setTimeout(() => {
      setCurrentTestimonial((prev) => {
        if (direction === "next") {
          return (prev + 1) % testimonials.length;
        } else {
          return (prev - 1 + testimonials.length) % testimonials.length;
        }
      });
      setFade(true); // trigger fade-in
    }, 300); // match CSS animation duration
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="testimonial-content">
          <div className="section-header">
            <h2 className="testimonial-title">
              TESTIMONIAL
              <span className="background-text">FEEDBACK</span>
            </h2>
          </div>

          <div className={`testimonial-card ${fade ? "fade-in" : "fade-out"}`}>
            <div className="quote-icon">
              <i className="fas fa-quote-left"></i>
            </div>

            <blockquote className="testimonial-quote">
              {current.quote}
            </blockquote>

            <div className="testimonial-author">
              <h4 className="author-name">{current.name}</h4>
              <p className="author-position">{current.position}</p>
              <p className="author-company">{current.company}</p>
            </div>
          </div>

          <div className="testimonial-navigation">
            <button
              className="nav-btn"
              onClick={() => changeTestimonial("prev")}
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${
                    index === currentTestimonial ? "active" : ""
                  }`}
                  onClick={() => {
                    setFade(false);
                    setTimeout(() => {
                      setCurrentTestimonial(index);
                      setFade(true);
                    }, 300);
                  }}
                ></button>
              ))}
            </div>

            <button
              className="nav-btn"
              onClick={() => changeTestimonial("next")}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
