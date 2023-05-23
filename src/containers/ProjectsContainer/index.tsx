import React from "react";

import HeadingWrapper from "../../components/HeadingWrapper";
import Project from "../../components/Project";

import styles from "./ProjectsContainer.module.scss"
import Headline from "../../components/Headline";
import Container from "../../UI/Container";
import Button from "../../components/Button";
import Heading from "../../components/Heading";

export type ProjectsContainerType = {
  projectsData: Queries.ContentfulPageTemplate['projectsSection']
};

const ProjectsContainer: React.FC<ProjectsContainerType> = ({ projectsData }) => {

  const list = projectsData && projectsData.map(item => (
    <Project key={item?.id} projectData={item!} />
  ))

  return (
    <Container className={styles.projectContainer}>
      <Container.Centered>
        <div className={styles.headlineWrapper}>
          <Headline text="Projects" />

          <Button path={"#contact"} label={"contact me"} />
        </div>

        <div className={styles.projectList}>
          <div className="project">Project 1
            <Heading copy={"Project 1"} />
          </div>
        </div>
      </Container.Centered>
    </Container>
  )
}

export default ProjectsContainer;