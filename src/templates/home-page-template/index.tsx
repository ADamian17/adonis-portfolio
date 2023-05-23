import React from 'react'
import { PageProps, graphql } from 'gatsby'

import AboutMeContainer from '../../containers/AboutMeContainer'
import MainHero from '../../components/Heros/MainHero'
import MainLayout from '../../layouts/MainLayout'
import ProjectsContainer from '../../containers/ProjectsContainer'
import Seo from '../../components/Seo'
import SkillsContainer from '../../containers/SkillsContainer'

type HomePageType = {
  contentfulPageTemplate: Queries.ContentfulPageTemplate;
}

const HomePageTemplate: React.FC<PageProps<HomePageType>> = ({ data }) => {
  const {
    contentfulPageTemplate: {
      aboutMeSection,
      footerSection,
      heroSection,
      projectsSection,
      skillsSection,
    }
  } = data

  return (
    <MainLayout footerData={footerSection}>
      {/* <MainHero heroData={heroSection} /> */}

      {/* <AboutMeContainer aboutMeData={aboutMeSection} />

      <ProjectsContainer projectsData={projectsSection} />

    */}

      <SkillsContainer skillData={skillsSection!} />
    </MainLayout>
  )
}

export default HomePageTemplate;

export const Head = () => <Seo />;

export const query = graphql`
  query HomePageQuery ($id: String!) {
    contentfulPageTemplate(id: {eq: $id}) {
      templateName
      ...AboutFragment
      ...FooterFragment
      ...HeroFragment
      ...ProjectsFragment
      ...SkillsFragment
    }
  }
`;
