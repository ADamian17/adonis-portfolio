import React from "react";

import HeadingWrapper from "../../components/HeadingWrapper";

import styles from "./AboutMeContainer.module.scss"

export type AboutMeContainerType = {};

const AboutMeContainer: React.FC<AboutMeContainerType> = (props) => {
  return (
    <section className={styles.aboutMeContainer} id="about-me">
      <div className={styles.aboutMeContentWrapper}>
        <figure className={styles.aboutMeImg}>
          <img src="/icons/about-me.svg" alt="about me img" />
        </figure>

        <div className={styles.aboutMeContent}>
          <HeadingWrapper copy='About Me' variant="dark" className={styles.aboutMeHeadline} />

          <p className={styles.aboutMeCopy}>Hola! I'm Adonis Martin, a classically trained Ballet and Modern dancer turned
            full-stack engineer born and raised in Contramaestre, Cuba.
            Although I've taken my last bow, I danced professionally for 11 years. That training is the foundation
            of my career, and the same skills that helped me succeed on stage are the ones that lead me to my second
            act as a developer. I love collaborating with a team, thinking of innovative ways to strategize and
            bring something to life. I love learning and exploring, tackling challenges both physical and mental. At
            my core, I'm a creator, infusing my passion and energy into every project.
            My culture is important to me -- while this means I'm bilingual (proficient in English and Spanish), it
            also means that dance and music are in my blood. You can usually find me grooving to Bad bunny(reggaeton
            artists) while I'm working, and my creative background brings a fresh perspective.
            I'd love to connect with people and companies to build great things.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutMeContainer;