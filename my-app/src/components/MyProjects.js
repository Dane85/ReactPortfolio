import React, { useState, useEffect } from "react";
import projectData from "../assets/json/Project.json";
import GLIImage from "../assets/images/GLI.png";
import ELMImage from "../assets/images/ELM.png";
import LEBEImage from "../assets/images/LEBE.png";

function MyProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  return (
    <div className="projectsWrapper">
      {projects.map((project) => (
        <div key={project.id} className="projectItem">
          {/* Displaying the project image */}
          <img
            src={
              project.id === 1
                ? GLIImage
                : project.id === 2
                ? ELMImage
                : project.id === 3
                ? LEBEImage
                : null
            }
            alt={project.name}
          />

          {/* Displaying project details */}
          <div className="projectDetails">
            <h2>{project.name}</h2>
            <p>Project: {project.type}</p>
            <p>
              <a href={project.link}>Website</a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyProjects;
