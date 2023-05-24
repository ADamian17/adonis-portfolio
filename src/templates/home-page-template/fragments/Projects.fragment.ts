import { graphql } from 'gatsby';

export const ProjectsFragment = graphql`
  fragment ProjectsFragment on ContentfulPageTemplate {
    projectsSection {
      id
      name
      demoLink
      codebaseLink
      techUsed {
        id
        name
      }
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
