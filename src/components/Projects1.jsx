import React, { useState } from "react";
import "./Projects1.css";

const projectsData = [
  {
    id: 1,
    title: "Modern Steel Door",
    image: "/images/project1.jpg",
    description: "A sleek and durable modern steel door for residential use.",
    category: "Doors",
  },
  {
    id: 2,
    title: "Industrial Railing System",
    image: "/images/project2.jpg",
    description: "A robust industrial railing system for warehouses and factories.",
    category: "Railings",
  },
  {
    id: 3,
    title: "Custom Ornamental Gate",
    image: "/images/project3.jpg",
    description: "A decorative steel gate combining security with elegance.",
    category: "Gates",
  },
  {
    id: 4,
    title: "Balcony Railings",
    image: "/images/project4.jpg",
    description: "Stylish balcony railings for modern apartments.",
    category: "Railings",
  },
  {
    id: 5,
    title: "Fireproof Steel Door",
    image: "/images/project5.jpg",
    description: "Highly secure and fireproof steel door for commercial buildings.",
    category: "Doors",
  },
];

const Projects1 = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-container">
      <h1 className="projects-heading">Our Projects</h1>
      <p className="projects-subheading">
        Explore our diverse portfolio of steel doors, railings, and custom solutions.
      </p>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id} onClick={() => openModal(project)}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-overlay">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-category">{project.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for project details */}
      {selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="modal-image"
            />
            <h2 className="modal-title">{selectedProject.title}</h2>
            <p className="modal-description">{selectedProject.description}</p>
            <p className="modal-category">Category: {selectedProject.category}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects1;
