import React from "react";

import styles from "./Project.module.scss"
import { GatsbyImage } from "gatsby-plugin-image";

import Button from "../Button";
import Heading from "../Heading";

export type ProjectType = {
  projectData: Queries.ContentfulProjectContent
};

const Project: React.FC<ProjectType> = ({ projectData }) => {
  const {
    name,
    projectImage,
    demoLink,
    codebaseLink,
    techUsed
  } = projectData;

  const techList = techUsed && techUsed.map((tech) => (
    <li key={tech?.id}>{tech?.name}</li>
  ))

  return (
    <div className={styles.project}>
      <GatsbyImage
        alt={projectImage?.title!}
        image={projectImage?.gatsbyImage!}
        className={styles.img}
      />

      <div className={styles.headlineWrapper}>
        <Heading copy={name!} />

        <ul className={styles.techList}>
          {techList}
        </ul>
      </div>

      <div className={styles.btnGroup}>
        <Button path={demoLink!} label="view project" target="_blank" />
        <Button path={codebaseLink!} label="view code" target="_blank" />
      </div>
    </div>
  )
}

export default Project;
