import React from "react";

import styles from "./SkillsGallery.module.scss"

export type SkillsGalleryType = {};

const SkillsGallery: React.FC<SkillsGalleryType> = (props) => {
  return (
    <section className={styles.skillsGallery}>
      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/html-css.svg" alt="gallery img 1" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/reactjs.svg" alt="gallery img 2" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/nodejs.svg" alt="gallery img 3" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/postgresql.svg" alt="gallery img 4" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/javascript.svg" alt="gallery img 5" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/sass-lang-ar21.svg" alt="gallery img 6" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/python-ar21.svg" alt="gallery img 7" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/djangoproject-ar21.svg" alt="gallery img 8" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/redux.svg" alt="gallery img 9" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/rest-api.svg" alt="gallery img 10" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/expressjs-ar21.svg" alt="gallery img 11" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/github.svg" alt="gallery img 12" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/mongodb-ar21.svg" alt="gallery img 13" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/mysql.svg" alt="gallery img 14" className={styles.skillsGalleryItemImg} />
      </figure>
    </section>
  )
}

export default SkillsGallery;