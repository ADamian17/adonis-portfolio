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
        <img src="/icons/skills/nodejs.svg" alt="gallery img 2" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/javascript.svg" alt="gallery img 3" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/expressjs.svg" alt="gallery img 4" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/python.svg" alt="gallery img 5" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/django.svg" alt="gallery img 6" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/graphql.svg" alt="gallery img 7" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/gatsby-logo.svg" alt="gallery img 8" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/typescript.svg" alt="gallery img 9" className={styles.skillsGalleryItemImg} />
      </figure>


      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/reactjs.svg" alt="gallery img 10" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/redux.svg" alt="gallery img 11" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/github.svg" alt="gallery img 12" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/recoil-js.svg" alt="gallery img 13" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/sass.svg" alt="gallery img 14" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/jest.svg" alt="gallery img 15" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/google.svg" alt="gallery img 16" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/prisma.svg" alt="gallery img 17" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/rest-api.svg" alt="gallery img 18" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/wordpress.svg" alt="gallery img 19" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/stack-overflow.svg" alt="gallery img 21" className={styles.skillsGalleryItemImg} />
      </figure>

      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/mongodb.svg" alt="gallery img 20" className={styles.skillsGalleryItemImg} />
      </figure>


      <figure className={styles.skillsGalleryItem}>
        <img src="/icons/skills/postgresql.svg" alt="gallery img 22" className={styles.skillsGalleryItemImg} />
      </figure>
    </section>
  )
}

export default SkillsGallery;