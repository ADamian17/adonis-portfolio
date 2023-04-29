import { graphql } from 'gatsby';

export const HeroFragment = graphql`
  fragment HeroFragment on ContentfulPageTemplate {
    heroSection {
      heroCtaLabel
      heroCtaLink
      heroHeadline
      heroImage {
        gatsbyImage(
          width: 800
          placeholder: BLURRED
          formats: [WEBP, PNG, AUTO]
        )
      }
    }
  }
`;
