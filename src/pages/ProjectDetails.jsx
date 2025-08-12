import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ProjectDetails.css";

// Import images
import project1Image from "../images/gallery/project1.png.webp";
import project2Image from "../images/gallery/project2.png.webp";
import project3Image from "../images/gallery/project3.png.webp";
import project4Image from "../images/gallery/project4.png.webp";
import project5Image from "../images/gallery/project5.png.webp";
import project6Image from "../images/gallery/project6.png.webp";

const ProjectDetails = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const projectData = {
    title: "Luxury Residential Villa",
    location: "Exclusive Hillside Estate",
    client: "Private Client",
    duration: "24 Months",
    budget: "$4.2 Million",
    area: "8,500 sq ft",
    status: "In Progress",
    completionDate: "June 2024",
  };

  const specifications = [
    {
      category: "Structure",
      items: [
        "Reinforced Concrete & Steel Frame",
        "Premium Stone Foundation",
        "Custom Architectural Details",
        "Advanced Insulation Systems",
      ],
    },
    {
      category: "Interior",
      items: [
        "Open-Concept Living Spaces",
        "Custom Kitchen & Bathrooms",
        "Premium Flooring & Finishes",
        "Smart Home Integration",
      ],
    },
    {
      category: "Amenities",
      items: [
        "Private Swimming Pool",
        "Wine Cellar & Bar",
        "Home Theater System",
        "Smart Security System",
      ],
    },
    {
      category: "Sustainability",
      items: [
        "Solar Power Integration",
        "Rainwater Collection",
        "Energy-Efficient Appliances",
        "Natural Ventilation Design",
      ],
    },
  ];

  const relatedProjects = [
    {
      id: 1,
      title: "Modern Penthouse",
      image: project2Image,
      category: "Residential",
      location: "Downtown",
    },
    {
      id: 2,
      title: "Luxury Condo",
      image: project3Image,
      category: "Residential",
      location: "Waterfront",
    },
    {
      id: 3,
      title: "Estate Villa",
      image: project4Image,
      category: "Residential",
      location: "Countryside",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="project-hero">
        <div className="container">
          <div className="project-hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/projects">Projects</Link>
              <span>/</span>
              <span>Project Details</span>
            </div>
            <h1 className="project-hero-title">{projectData.title}</h1>
            <p className="project-hero-subtitle">
              An architectural masterpiece combining luxury living with
              sustainable design in a breathtaking hillside location
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="project-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-main">
              <img
                src={project1Image}
                alt="Luxury Residential Villa"
                className="main-project-image"
              />
              <div className="project-description">
                <h2>Project Description</h2>
                <p>
                  This luxury residential villa represents the epitome of
                  sophisticated living, seamlessly blending contemporary
                  architecture with timeless elegance. The project features an
                  open-concept design that maximizes natural light and creates
                  seamless indoor-outdoor living spaces.
                </p>
                <p>
                  The villa incorporates premium materials and finishes
                  throughout, including imported marble, custom woodwork, and
                  smart home technology. The expansive windows and glass doors
                  provide panoramic views of the surrounding landscape while
                  maintaining privacy and security. The design prioritizes both
                  luxury and sustainability, featuring energy-efficient systems
                  and eco-friendly materials.
                </p>
              </div>
            </div>

            <div className="overview-sidebar">
              <div className="project-info-card">
                <h3>Project Information</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">Client:</span>
                    <span className="info-value">{projectData.client}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Location:</span>
                    <span className="info-value">{projectData.location}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Duration:</span>
                    <span className="info-value">{projectData.duration}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Budget:</span>
                    <span className="info-value">{projectData.budget}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Area:</span>
                    <span className="info-value">{projectData.area}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Status:</span>
                    <span className="info-value status-in-progress">
                      {projectData.status}
                    </span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Completion:</span>
                    <span className="info-value">
                      {projectData.completionDate}
                    </span>
                  </div>
                </div>
              </div>

              <div className="project-stats">
                <div className="stat-item">
                  <div className="stat-number">25,000</div>
                  <div className="stat-label">Square Feet</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">18</div>
                  <div className="stat-label">Months</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Tabs */}
      <section className="project-details">
        <div className="container">
          <div className="tabs-container">
            <div className="tabs-header">
              <button
                className={`tab-button ${
                  activeTab === "overview" ? "active" : ""
                }`}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </button>
              <button
                className={`tab-button ${
                  activeTab === "specifications" ? "active" : ""
                }`}
                onClick={() => setActiveTab("specifications")}
              >
                Specifications
              </button>
              <button
                className={`tab-button ${
                  activeTab === "gallery" ? "active" : ""
                }`}
                onClick={() => setActiveTab("gallery")}
              >
                Gallery
              </button>
              <button
                className={`tab-button ${
                  activeTab === "timeline" ? "active" : ""
                }`}
                onClick={() => setActiveTab("timeline")}
              >
                Timeline
              </button>
            </div>

            <div className="tab-content">
              {activeTab === "overview" && (
                <div className="tab-panel">
                  <h3>Project Overview</h3>
                  <p>
                    The Modern Office Complex project was conceived to meet the
                    growing demand for innovative workspace solutions in the
                    heart of the business district. Our team worked closely with
                    TechCorp Industries to create a building that not only meets
                    their current needs but also anticipates future growth and
                    technological advancements.
                  </p>
                  <div className="overview-features">
                    <div className="feature-item">
                      <i className="fas fa-leaf"></i>
                      <h4>Sustainable Design</h4>
                      <p>
                        LEED Gold certified with advanced environmental systems
                      </p>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-wifi"></i>
                      <h4>Smart Technology</h4>
                      <p>Integrated building management and IoT connectivity</p>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-users"></i>
                      <h4>Collaborative Spaces</h4>
                      <p>Flexible layouts designed for team collaboration</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "specifications" && (
                <div className="tab-panel">
                  <h3>Technical Specifications</h3>
                  <div className="specifications-grid">
                    {specifications.map((spec, index) => (
                      <div key={index} className="spec-category">
                        <h4>{spec.category}</h4>
                        <ul>
                          {spec.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "gallery" && (
                <div className="tab-panel">
                  <h3>Project Gallery</h3>
                  <div className="gallery-grid">
                    <img src={project1Image} alt="Project View 1" />
                    <img src={project2Image} alt="Project View 2" />
                    <img src={project3Image} alt="Project View 3" />
                    <img src={project4Image} alt="Project View 4" />
                    <img src={project5Image} alt="Project View 5" />
                    <img src={project6Image} alt="Project View 6" />
                  </div>
                </div>
              )}

              {activeTab === "timeline" && (
                <div className="tab-panel">
                  <h3>Project Timeline</h3>
                  <div className="timeline">
                    <div className="timeline-item">
                      <div className="timeline-date">June 2022</div>
                      <div className="timeline-content">
                        <h4>Project Initiation</h4>
                        <p>
                          Site survey, architectural planning, and permit
                          acquisition
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-date">September 2022</div>
                      <div className="timeline-content">
                        <h4>Foundation Work</h4>
                        <p>
                          Excavation and premium stone foundation installation
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-date">January 2023</div>
                      <div className="timeline-content">
                        <h4>Structural Framework</h4>
                        <p>
                          Concrete and steel frame construction with custom
                          details
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-date">June 2023</div>
                      <div className="timeline-content">
                        <h4>Interior & Finishes</h4>
                        <p>
                          Premium materials, custom cabinetry, and smart systems
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-date">June 2024</div>
                      <div className="timeline-content">
                        <h4>Project Completion</h4>
                        <p>Final inspections and handover to client</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="related-projects">
        <div className="container">
          <h2 className="section-title">Related Projects</h2>

          <div className="projects-grid">
            {relatedProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <Link
                      to={`/project-details/${project.id}`}
                      className="project-btn project-btn-primary"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                  <p className="project-location">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="project-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Build Your Dream Home?</h2>
            <p>
              Let's discuss how we can create your perfect luxury residence with
              our expertise in custom home construction and architectural
              design.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="project-btn project-btn-primary">
                Get Free Quote
              </Link>
              <Link to="/projects" className="project-btn project-btn-outline">
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
