import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/projects.css";
import project1 from "../images/gallery/project1.png.webp";
import project2 from "../images/gallery/project2.png.webp";
import project3 from "../images/gallery/project3.png.webp";
import project4 from "../images/gallery/project4.png.webp";
import project5 from "../images/gallery/project5.png.webp";
import project6 from "../images/gallery/project6.png.webp";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [animateCards, setAnimateCards] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Floride Chemicals Factory",
      category: "interior",
      image: project1,
    },
    {
      id: 2,
      title: "Floride Chemicals Factory",
      category: "interior",
      image: project2,
    },
    {
      id: 3,
      title: "Floride Chemicals Factory",
      category: "recent",
      image: project3,
    },
    {
      id: 4,
      title: "Floride Chemicals Factory",
      category: "big_building",
      image: project4,
    },
    {
      id: 5,
      title: "Floride Chemicals Factory",
      category: "park",
      image: project5,
    },
    {
      id: 6,
      title: "Floride Chemicals Factory",
      category: "park",
      image: project6,
    },
  ];

  const filters = [
    { id: "all", label: "Show All" },
    { id: "interior", label: "Interior" },
    { id: "recent", label: "Recent" },
    { id: "big_building", label: "Big Building" },
    { id: "park", label: "Park" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleFilterChange = (filterId) => {
    setAnimateCards(false);
    setTimeout(() => {
      setActiveFilter(filterId);
      setAnimateCards(true);
    }, 300);
  };

  useEffect(() => {
    setAnimateCards(true);
  }, []);

  return (
    <section className="section projects-section">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">OUR PROJECTS</h2>
          <div className="project-filters">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${
                  activeFilter === filter.id ? "active" : ""
                }`}
                onClick={() => handleFilterChange(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className={`projects-grid ${animateCards ? "animate" : ""}`}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-plus-icon">
                  <i className="fas fa-plus"></i>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
