import React from "react";
import { Link } from "gatsby";

import styles from "./MainNav.module.scss"
import CustomLink from "../../components/CustomLink";

export type MainNavType = {};

const MainNav: React.FC<MainNavType> = (props) => {
  const navItems = [
    {
      path: "/#projects",
      label: "Projects",
      icon: "icon-folder",
      target: null
    },
    {
      path: "/#about-me",
      label: "About Me",
      icon: "icon-cool2",
      target: null
    },
    {
      path: "/docs/resume2021.pdf",
      label: "Resume",
      icon: "icon-download",
      target: "_blank"
    },
  ]

  const menuItemsList = navItems.map(({
    path,
    label,
    icon,
    target
  }) => (
    <li className={styles.mainNavMenuItem}>
      <CustomLink className={styles.mainNavMenuLink} path={path} target={target!}>
        <svg>
          <use href={`/icons/nav-icons.svg#${icon}`}></use>
        </svg>

        <span>{label}</span>
      </CustomLink>
    </li>
  ));

  return (
    <div className={styles.mainNavWrapper}>
      <header className={styles.mainNav}>
        <menu className={styles.mainNavMenu}>
          {menuItemsList}
        </menu>
      </header>
    </div>
  )
}

export default MainNav;