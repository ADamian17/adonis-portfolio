import React, { useRef } from 'react'

import FooterFrom from './FooterForm'
import FooterNav from './FooterNav'
import HeadingWrapper from '../../components/HeadingWrapper'

import styles from "./MainFooter.module.scss"

type MainFooterType = {
  footerData: Queries.ContentfulPageTemplate["footerSection"]
}

const MainFooter: React.FC<MainFooterType> = ({ footerData }) => {
  const { headline, footerNav } = footerData!
  const year = useRef(new Date().getFullYear())
  return (
    <footer className={styles.footer}>
      <HeadingWrapper copy={headline!} variant="light" />

      <FooterFrom />

      <FooterNav footerNavItems={footerNav} />

      <p className={styles.copyright}>
        Adonis D. Martin &copy; Copyright {year.current}.
      </p>
    </footer>
  )
}

export default MainFooter