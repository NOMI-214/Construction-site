import React, { useState } from 'react';
import '../styles/projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Show All');

  const filters = ['Show All', 'Interior', 'Recent', 'Big Building', 'Park'];

  const projects = [
    {
      id: 1,
      title: 'Florida Chemicals Factory',
      category: 'Big Building',
      image: '/images/gallery/project1.png.webp',
      description: 'Modern industrial facility with sustainable design'
    },
    {
      id: 2,
      title: 'Florida Chemicals Factory',
      category: 'Interior',
      image: '/images/gallery/project2.png.webp',
      description: 'Contemporary office interior with innovative space planning'
    },
    {
      id: 3,
      title: 'Florida Chemicals Factory',
      category: 'Big Building',
      image: '/images/gallery/project3.png.webp',
      description: 'Mixed-use development with residential and commercial spaces'
    },
    {
      id: 4,
      title: 'Florida Chemicals Factory',
      category: 'Recent',
      image: '/images/gallery/project4.png.webp',
      description: 'Cutting-edge architectural design with sustainable materials'
    },
    {
      id: 5,
      title: 'Florida Chemicals Factory',
      category: 'Interior',
      image: '/images/gallery/project5.png.webp',
      description: 'Luxury residential interior with modern aesthetics'
    },
    {
      id: 6,
      title: 'Florida Chemicals Factory',
      category: 'Big Building',
      image: '/images/gallery/project6.png.webp',
      description: 'Corporate headquarters with innovative facade design'
    }
  ];

  const filteredProjects = activeFilter === 'Show All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      {/* Hero Section */}
             <section className="projects-hero">
         <div className="hero-background">
           <div className="hero-overlay"></div>
         </div>
        
        <div className="hero-content">
          <div className="hero-text-container">
            <h1 className="hero-title">OUR PROJECTS</h1>
            <div className="breadcrumb">
              <span>HOME</span>
              <span className="separator">/</span>
              <span>PROJECT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">OUR PROJECTS</h2>
          </div>

          {/* Filter Tabs */}
          <div className="filter-tabs">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-actions">
                      <button className="view-project">View Project</button>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="load-more-container">
            <button className="load-more-btn">Load More Projects</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
