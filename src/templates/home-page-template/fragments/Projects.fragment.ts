import { graphql } from 'gatsby';

export const ProjectsFragment = graphql`
  fragment ProjectsFragment on ContentfulPageTemplate {
    projectsSection {
      id
      name
      projectDescription
      demoLink
      codebaseLink
      projectImage {
        title
        url
        gatsbyImage(
          width: 800
          placeholder: BLURRED
          formats: [WEBP, PNG, AUTO]
        )
      }
    }
  }
`;
