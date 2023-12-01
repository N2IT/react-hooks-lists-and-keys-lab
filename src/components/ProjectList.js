import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{
        projects.map((project) => {
          // render ProjectItem Components here
          return <ProjectItem 
          name={project.name} 
          about={project.about} 
          key={project.id}
          technologies={project.technologies} 
          />
         })
      }</div>
    </div>
  );
}

export default ProjectList;
