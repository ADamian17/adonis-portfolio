import React from 'react'

import MainHero from '../../components/Heros/MainHeros';
import MainNav from '../MainNav';

import styles from "./MainLayout.module.scss";

type MainLayoutType = {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutType> = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <MainNav />

      <main className={styles.main}>
        {children}
      </main>

      <footer style={{ backgroundColor: "blue", gridColumn: "full-start / full-end" }}>
        footer
      </footer>
    </div>
  )
}

export default MainLayout;