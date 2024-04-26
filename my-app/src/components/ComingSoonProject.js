import React, { useState, useEffect } from "react";
import ComingSoonProjectData from "../assets/json/ComingSoonProject.json";
import SugarImage from "../assets/images/sugar.png";
import DutyBoundImage from "../assets/images/db.png";

function ComingSoonProject() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(ComingSoonProjectData);
  }, []);

  return (
    <div className="ComingSoonProjectWrapper">
      {projects.map((ComingSoonProject) => (
        <div key={ComingSoonProject.id} className="ComingSoonProjectItem">
          {/* Displaying the project image */}
          <img
            src={
              ComingSoonProject.id === 1
                ? DutyBoundImage
                : ComingSoonProject.id === 2
                ? SugarImage
                : null
            }
            alt={ComingSoonProject.name}
          />

          {/* Displaying project details */}
          <div className="ComingSoonProjectDetails">
            <h2>{ComingSoonProject.name}</h2>
            <p>Project: {ComingSoonProject.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ComingSoonProject;
