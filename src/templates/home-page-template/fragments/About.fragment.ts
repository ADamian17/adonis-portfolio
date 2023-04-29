import { graphql } from 'gatsby';

export const AboutFragment = graphql`
  fragment AboutFragment on ContentfulPageTemplate {
    aboutMeSection {
      aboutMeCopy {
        aboutMeCopy
      }
      aboutMeImage {
        title
        gatsbyImage(
          width: 800
          placeholder: BLURRED
          formats: [WEBP, PNG, AUTO]
        )
      }
    }
  }
`;
