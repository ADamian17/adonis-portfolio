import React from 'react'

import styles from "./MainLayout.module.scss";
import MainNav from '../MainNav';

type MainLayoutType = {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutType> = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <MainNav />

      <main style={{ backgroundColor: "red" }}>
        {children}
      </main>

      <footer style={{ backgroundColor: "blue" }}>
        footer
      </footer>
    </div>
  )
}

export default MainLayout