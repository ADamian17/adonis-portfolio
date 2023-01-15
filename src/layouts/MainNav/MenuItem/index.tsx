import React from 'react'
import CustomLink from '../../../components/CustomLink';

import styles from "./MenuItem.module.scss";

const MenuItem: React.FC<MainNav.MenuItemType> = ({ path, label, icon, target }) => (
  <li className={styles.mainNavMenuItem}>
    <CustomLink className={styles.mainNavMenuLink} path={path} target={target!}>
      <svg>
        <use href={`/icons/nav-icons.svg#${icon}`}></use>
      </svg>

      <span>{label}</span>
    </CustomLink>
  </li>
)

export default MenuItem;