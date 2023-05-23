import { graphql } from 'gatsby';

export const SkillsFragment = graphql`
  fragment SkillsFragment on ContentfulPageTemplate {
    skillsSection {
      id
      name
      skillYear
    }
  }
`;
