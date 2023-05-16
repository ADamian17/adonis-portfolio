import React from 'react'

import MainHero from '../../components/Heros/MainHero';
import MainNav from '../MainNav';

import styles from "./MainLayout.module.scss";
import MainFooter from '../MainFooter';

type MainLayoutType = {
  children: React.ReactNode;
  footerData: Queries.ContentfulPageTemplate["footerSection"]
}

const MainLayout: React.FC<MainLayoutType> = ({ children, footerData }) => {
  return (
    <div className={styles.mainLayout}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet libero repellat unde minus sunt, sequi voluptate magnam, modi maiores consequuntur veritatis, mollitia a! Iste nesciunt, quo dolores harum vitae voluptatum!</p>
      {/* <MainNav />

      <main className={styles.main}>
        {children}
      </main>

      <MainFooter footerData={footerData} /> */}
    </div>
  )
}

export default MainLayout;