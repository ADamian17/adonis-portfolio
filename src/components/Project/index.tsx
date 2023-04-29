import React from "react";

import styles from "./Project.module.scss"
import { GatsbyImage } from "gatsby-plugin-image";
import HeadingWrapper from "../HeadingWrapper";
import Button from "../Button";

export type ProjectType = {
  projectData: Queries.ContentfulProjectContent
};

const Project: React.FC<ProjectType> = ({ projectData }) => {
  const {
    name,
    projectDescription,
    projectImage,
  } = projectData;

  return (
    <article className={styles.project}>
      <div className={styles.projectPicture}>
        <div
          className={styles.projectBackdrop}
          style={{
            ["--background-image" as string]: `url(${projectImage?.url})`
          }}>
        </div>

        <GatsbyImage
          alt={projectImage?.title!}
          image={projectImage?.gatsbyImage!}
          className={styles.projectImg}
        />
      </div>

      <div className={styles.projectContent}>
        <HeadingWrapper copy={name!} variant="dark" headingType="h2" className={styles.projectTitle} />

        <p className={styles.projectText}>
          {projectDescription}
        </p>

        <div className={styles.projectBtnGroup}>
          <Button path="/" label="live Demo" />
          <Button path="/" label="Github Repo" />
        </div>
      </div>
    </article>
  )
}

export default Project;
