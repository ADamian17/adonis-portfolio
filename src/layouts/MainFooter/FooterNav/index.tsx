import React from 'react'
import CustomLink from '../../../components/CustomLink';

import styles from "./FooterNav.module.scss";
import Heading from '../../../components/Heading';

type FooterNavType = {
  footerNavItems: Queries.ContentfulFooterContent["footerNav"],
  headline: string;
}

const FooterNav: React.FC<FooterNavType> = ({ footerNavItems, headline }) => (
  <>
    <hr className={styles.footerNavDivider} />

    <Heading copy={headline!} className={styles.footerNavHeadline} />

    <ul role="menubar" className={styles.footerNav}>
      {
        footerNavItems && footerNavItems.map((navItem) => (
          <li key={navItem?.menuLabel}>
            <CustomLink
              className={styles.footerNavItem}
              path={navItem?.menuLink!}
              target={navItem?.menuTarget!}
            >
              <svg>
                <use href={`/icons/footer-icons.svg#${navItem?.menuIcon}`}></use>
              </svg>
            </CustomLink>
          </li>
        ))
      }
    </ul>
  </>
)

export default FooterNav