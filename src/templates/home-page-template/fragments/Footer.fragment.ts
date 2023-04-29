import { graphql } from 'gatsby';

export const FooterFragment = graphql`
  fragment FooterFragment on ContentfulPageTemplate {
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
`;
