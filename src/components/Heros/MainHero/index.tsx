import React from 'react'

import Button from '../../Button';

import styles from "./MainHero.module.scss";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

type MainHeroType = {
  heroData: Queries.ContentfulPageTemplate["heroSection"]
}

const MainHero: React.FC<MainHeroType> = ({ heroData }) => {
  const { heroCtaLabel, heroCtaLink, heroHeadline, heroImage } = heroData!
  const imgSrc = getImage(heroImage?.gatsbyImage!)

  return (
    <header className={styles.mainHero} id="top">
      <section className={styles.headlineWrapper}>
        <h1 className={styles.heroHeadline}>{heroHeadline}</h1>

        <Button path={heroCtaLink!} label={heroCtaLabel!} />
      </section>

      <GatsbyImage
        className={styles.heroImage}
        alt='hero img'
        image={imgSrc!}
      />
    </header>
  )
}

export default MainHero;
