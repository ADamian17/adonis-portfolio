import React from "react";

import MenuItemList from "./MenuItemsList";

import DefaultNavigation from "../../staticQueries/DefaultNavigation";

import styles from "./MainNav.module.scss";

const MainNav: React.FC = (props) => {
  const menuItems = DefaultNavigation();

  return (
    <div className={styles.mainNavWrapper}>
      <header className={styles.mainNav}>
        <menu className={styles.mainNavMenu}>
          <MenuItemList navItems={menuItems} />
        </menu>
      </header>
    </div>
  )
}

export default MainNav;
