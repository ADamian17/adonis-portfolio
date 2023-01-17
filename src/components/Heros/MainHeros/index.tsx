import React from 'react'

import Button from '../../Button';

import styles from "./MainHero.module.scss";

const MainHero: React.FC = (props) => {
  return (
    <header className={styles.mainHero} id="top">
      <section className={styles.headlineWrapper}>
        <h1 className={styles.heroHeadline}>Adonis D. Martin Software Engineer</h1>

        <Button path='#projects' label='Projects' />
      </section>

      <figure className={styles.heroImage}>
        <img src="/images/hero-image.png" alt="hero image" />
      </figure>
    </header>
  )
}

export default MainHero;
