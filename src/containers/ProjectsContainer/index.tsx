import React from "react";

import HeadingWrapper from "../../components/HeadingWrapper";

import styles from "./ProjectsContainer.module.scss"
import Button from "../../components/Button";

export type ProjectsContainerType = {};

const ProjectsContainer: React.FC<ProjectsContainerType> = (props) => {
  const list = [1, 2].map(item => (
    <article key={item} className={styles.project}>
      <div className={styles.projectPicture}>
        <div
          className={styles.projectBackdrop}
          style={{
            ["--background-image" as string]: `url(/images/burnining_ruber_new.png)`
          }}>
        </div>

        <img
          alt="project image"
          className={styles.projectImg}
          src="/images/burnining_ruber_new.png"
        />
      </div>

      <div className={styles.projectContent}>
        <HeadingWrapper copy={"&ldquo; Some Project Title &rdquo;"} variant="dark" headingType="h2" />

        <p className={styles.projectText}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit labore neque, dolorum quisquam doloremque error ullam amet iste deleniti aliquam iure, modi hic laboriosam, beatae accusantium ea. Corporis, inventore cum.
        </p>

        <div className="btn__group">
          <Button path="/" label="live Demo" />
          <Button path="/" label="Github Repo" />
        </div>
      </div>
    </article>
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