import React from "react";

import styles from "./Projects.module.scss";

import { projects } from "@/data";
import ProjectCard from "@/components/Molecules/ProjectCard";

function Projects() {
  return (
    <div className={styles.projectsWrapper}>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <React.Fragment key={project.id}>
            <ProjectCard project={project} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Projects;
