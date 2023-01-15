import React from "react";

import MenuItemList from "./MenuItemsList";

import styles from "./MainNav.module.scss";

const MainNav: React.FC = (props) => {
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

  return (
    <div className={styles.mainNavWrapper}>
      <header className={styles.mainNav}>
        <menu className={styles.mainNavMenu}>
          <MenuItemList navItems={navItems} />
        </menu>
      </header>
    </div>
  )
}

export default MainNav;