import React from "react";

import HeadingWrapper from "../../components/HeadingWrapper";
import SkillsGallery from "../../components/SkillsGallery";

import styles from "./SkillsContainer.module.scss"

export type SkillsContainerType = {};

const SkillsContainer: React.FC<SkillsContainerType> = (props) => {
  return (
    <section className={styles.skillsContainer}>
      <HeadingWrapper copy='Skills' variant="dark" />

      <SkillsGallery />
    </section>
  )
}

export default SkillsContainer;