import { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const DefaultNavigation = () => {
  const {
    contentfulDefaultNavigation: { menuItems },
  } = useStaticQuery(graphql`
    query {
      contentfulDefaultNavigation {
        menuItems {
          menuLabel
          menuIcon
          menuLink
          menuTarget
        }
      }
    }
  `);

  return useMemo(() => menuItems, [menuItems]);
};

export default DefaultNavigation;
