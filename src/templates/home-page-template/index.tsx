import React from 'react'
import { PageProps, graphql } from 'gatsby'

import HomePageLayout from '../../layouts/HomePageLayout'
import ProjectsContainer from '../../containers/ProjectsContainer'
import Seo from '../../components/Seo'
import SkillsContainer from '../../containers/SkillsContainer'

type HomePageType = {
  contentfulPageTemplate: Queries.ContentfulPageTemplate;
}

const HomePageTemplate: React.FC<PageProps<HomePageType>> = ({ data }) => {
  const {
    contentfulPageTemplate: {
      footerSection,
      heroSection,
      projectsSection,
      skillsSection,
    }
  } = data

  return (
    <HomePageLayout footerData={footerSection} heroData={heroSection}>
      <SkillsContainer skillData={skillsSection!} />
      <ProjectsContainer projectsData={projectsSection} />
    </HomePageLayout>
  )
}

export default HomePageTemplate;

export const Head = () => <Seo />;

export const query = graphql`
  query HomePageQuery ($id: String!) {
    contentfulPageTemplate(id: {eq: $id}) {
      templateName
      ...FooterFragment
      ...HeroFragment
      ...ProjectsFragment
      ...SkillsFragment
    }
  }
`;
