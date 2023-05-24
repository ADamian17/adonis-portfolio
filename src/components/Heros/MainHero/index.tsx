import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Button from '../../Button';

import styles from "./MainHero.module.scss";
import Container from '../../../UI/Container';
import Heading from '../../Heading';
import CustomLink from '../../CustomLink';
import RingsFigure from '../../RingsFigure';

type MainHeroType = {
  heroData: Queries.ContentfulPageTemplate["heroSection"]
}

const MainHero: React.FC<MainHeroType> = ({ heroData }) => {
  const { heroCtaLabel, heroCtaLink, heroHeadline, heroImage, heroNav, heroSubcopy } = heroData!
  const imgSrc = getImage(heroImage?.gatsbyImage!)
  const navItems = heroNav?.menuItems && heroNav?.menuItems.map(item => (
    <li key={item?.id}>
      <CustomLink
        className={styles.navLink}
        path={item?.menuLink!}
        target={item?.menuTarget!}
      >
        {item?.menuLabel}
      </CustomLink>
    </li>
  ))


  return (
    <header className={styles.mainHero}>
      <RingsFigure className={styles.heroRings} />

      <div className={styles.heroCircle}>
        <svg>
          <use href='/icons/pattern-circle.svg#icon'></use>
        </svg>
      </div>

      <Container>

        <Container.Centered>
          <nav className={styles.heroNav}>
            <Heading copy="Adonis D. Martin" />

            <ul role="menubar" className={styles.navList}>
              {navItems}
            </ul>
          </nav>

          <div className={styles.heroImg}>
            <GatsbyImage
              className={styles.gImg}
              alt='hero img'
              image={imgSrc!}
              loading='eager' />
          </div>

          <div className={styles.headlineWrapper}>
            <h1 className={styles.headline} dangerouslySetInnerHTML={{ __html: heroHeadline! }} />

            <p className={styles.subcopy}>{heroSubcopy}</p>

            <Button path={heroCtaLink!} label={heroCtaLabel!} />
          </div>
        </Container.Centered>
      </Container>
    </header>
  )
}

export default MainHero;
