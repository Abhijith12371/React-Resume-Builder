import React from "react";
import "./Projects.css";

const Projects = (props) => {
  return (
    <div className="projects aqua-shade">
      <h3><i className="fa-solid fa-file-code"></i> Personal Projects</h3>
      <ul>
        {props.data.projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
