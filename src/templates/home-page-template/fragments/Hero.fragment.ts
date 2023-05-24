import { graphql } from 'gatsby';

export const HeroFragment = graphql`
  fragment HeroFragment on ContentfulPageTemplate {
    heroSection {
      heroCtaLabel
      heroCtaLink
      heroHeadline
      heroSubcopy
      heroNav {
        menuItems {
          menuLabel
          menuLink
          menuTarget
          id
        }
      }
      heroImage {
        gatsbyImage(
          width: 500
          placeholder: BLURRED
          formats: [WEBP, PNG, AUTO]
          layout: FULL_WIDTH
        )
      }
    }
  }
`;
