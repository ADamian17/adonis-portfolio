import React from "react";

import HeadingWrapper from "../../components/HeadingWrapper";
import Project from "../../components/Project";

import styles from "./ProjectsContainer.module.scss"

export type ProjectsContainerType = {
  projectsData: Queries.ContentfulPageTemplate['projectsSection']
};

const ProjectsContainer: React.FC<ProjectsContainerType> = ({ projectsData }) => {

  const list = projectsData && projectsData.map(item => (
    <Project key={item?.id} projectData={item!} />
  ))

  return (
    <section className={styles.skillsContainer} id="projects">
      <HeadingWrapper copy='Projects' variant="dark" />

      <section className={styles.projectList}>
        {list}
      </section>
    </section>
  )
}

export default ProjectsContainer;