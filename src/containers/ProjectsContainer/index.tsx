import React from "react";

import HeadingWrapper from "../../components/HeadingWrapper";

import styles from "./ProjectsContainer.module.scss"
import Button from "../../components/Button";

export type ProjectsContainerType = {};

const ProjectsContainer: React.FC<ProjectsContainerType> = (props) => {
  const list = [1, 2].map(_ => (
    <article className={styles.project}>
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
        <h2 className="heading-2 heading-2--dark mb-md">&ldquo;Some Project Title&rdquo;</h2>

        <p className={styles.projectText}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit labore neque, dolorum quisquam doloremque error ullam amet iste deleniti aliquam iure, modi hic laboriosam, beatae accusantium ea. Corporis, inventore cum.
        </p>

        <div className="btn__group">
          <Button path={"/"} label={"live Demo"} />
          <Button path={"/"} label={"Github Repo"} />
          {/* <a className="btn" href="" style={{ display: "inline-block" }} target="_blank"></a>
              <a className="btn" href="" style={{ display: "inline-block" }} target="_blank"></a> */}
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