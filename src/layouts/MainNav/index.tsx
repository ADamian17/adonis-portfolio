import React from "react";

import styles from "./MainNav.module.scss"
import { Link } from "gatsby";

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
      path: "/#projects",
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
      <Link className={styles.mainNavMenuLink} to={path}>
        <svg>
          <use href={`/icons/nav-icons.svg#${icon}`}></use>
        </svg>

        <span>{label}</span>
      </Link>
    </li>
  ));

  return (
    <div className={styles.mainNavWrapper}>
      <header className={styles.mainNav}>
        <menu className={styles.mainNavMenu}>
          {menuItemsList}

          {/* 
        <li className="nav__item">
        <a href="/resume/resume2021.pdf" target="_blank" className="nav__link">
        <svg>
        <use href="assets/icons.svg#icon-download"></use>
        </svg>
        Resume
        </a>
        </li> 
      */}
        </menu>
      </header>
    </div>
  )
}

export default MainNav;