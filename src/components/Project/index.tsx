import React from "react";

import styles from "./Project.module.scss"
import { GatsbyImage } from "gatsby-plugin-image";
import HeadingWrapper from "../HeadingWrapper";
import Button from "../Button";
import Heading from "../Heading";

export type ProjectType = {
  projectData: Queries.ContentfulProjectContent
};

const Project: React.FC<ProjectType> = ({ projectData }) => {
  const {
    name,
    projectDescription,
    projectImage,
    demoLink,
    codebaseLink
  } = projectData;

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
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
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
