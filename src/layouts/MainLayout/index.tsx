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
    <>
      <MainNav />

      <main>
        {children}
      </main>

      <MainFooter footerData={footerData} />
    </>
  )
}

export default MainLayout;
