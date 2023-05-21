import { graphql } from 'gatsby';

export const FooterFragment = graphql`
  fragment FooterFragment on ContentfulPageTemplate {
    footerSection {
      headline
      subcopy {
        subcopy
      }
      footerNav {
        menuLabel
        menuLink
        menuTarget
        menuIcon
      }
    }
  }
`;
