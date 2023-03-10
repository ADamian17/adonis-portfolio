import React from 'react'
import { PageProps, graphql } from 'gatsby'

import MainHero from '../../components/Heros/MainHero'
import MainLayout from '../../layouts/MainLayout'
import Seo from '../../components/Seo'
import SkillsContainer from '../../containers/SkillsContainer'
import AboutMeContainer from '../../containers/AboutMeContainer'
import ProjectsContainer from '../../containers/ProjectsContainer'

type HomePageType = {
  contentfulPageTemplate: Queries.ContentfulPageTemplate;
}

const HomePageTemplate: React.FC<PageProps<HomePageType>> = ({ data }) => {
  const {
    contentfulPageTemplate: {
      heroSection,
      footerSection
    }
  } = data

  return (
    <MainLayout footerData={footerSection}>
      <MainHero heroData={heroSection} />

      <AboutMeContainer />

      <ProjectsContainer />

      <SkillsContainer />
    </MainLayout>
  )
}

export default HomePageTemplate

export const Head = () => <Seo />

export const query = graphql`
  query HomePageQuery ($id: String!) {
    contentfulPageTemplate(id: {eq: $id}) {
      templateName
      heroSection {
        heroCtaLabel
        heroCtaLink
        heroHeadline
        heroImage {
          gatsbyImage(
            width: 800, 
            placeholder: BLURRED, 
            formats: [WEBP, PNG, AUTO]
          )
        }
      }
      footerSection {
        headline
        footerNav {
          menuLabel
          menuLink
          menuTarget
          menuIcon
        }
      }
    }
  }
`;
