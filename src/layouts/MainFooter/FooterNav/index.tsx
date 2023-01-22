import React from 'react'
import CustomLink from '../../../components/CustomLink';

import styles from "./FooterNav.module.scss";

type FooterNavType = {
  footerNavItems: Queries.ContentfulFooterContent["footerNav"]
}

const FooterNav: React.FC<FooterNavType> = ({ footerNavItems }) => (
  <ul role="menubar" className={styles.footerNav}>
    {
      footerNavItems && footerNavItems.map((navItem) => (
        <li>
          <CustomLink
            className={styles.footerNavItem}
            path={navItem?.menuLink!}
            target={navItem?.menuTarget!}
          >
            <svg>
              <use href={`/icons/footer-icons.svg#${navItem?.menuIcon}`}></use>
            </svg>

            {navItem?.menuLabel}
          </CustomLink>
        </li>
      ))
    }
  </ul>
)

export default FooterNav