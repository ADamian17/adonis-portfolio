import React from "react";

import HeadingWrapper from "../../components/HeadingWrapper";

import styles from "./ProjectsContainer.module.scss"

export type ProjectsContainerType = {};

const ProjectsContainer: React.FC<ProjectsContainerType> = (props) => {
  return (
    <section className={styles.skillsContainer}>
      <HeadingWrapper copy='Projects' variant="dark" />
    </section>
  )
}

export default ProjectsContainer;