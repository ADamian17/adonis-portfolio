import React, { useRef } from 'react'

import FooterFrom from './FooterForm'
import FooterNav from './FooterNav'
import Heading from '../../components/Heading'
import { FooterFormProvider } from './FooterForm/FooterFormProvider'

import styles from "./MainFooter.module.scss"

type MainFooterType = {
  footerData: Queries.ContentfulPageTemplate["footerSection"]
}

const MainFooter: React.FC<MainFooterType> = ({ footerData }) => {
  const { headline, subcopy, footerNav } = footerData!
  const year = useRef(new Date().getFullYear())

  return (
    <footer className={styles.footer}>
      <div className={styles.copyWrapper}>
        <Heading copy={headline!} className={styles.copyHeadline} />

        <p className={styles.subcopy}>{subcopy?.subcopy}</p>
      </div>

      <FooterFormProvider>
        <FooterFrom />
      </FooterFormProvider>

      <div>
        <FooterNav footerNavItems={footerNav} headline='Adonis Martin' />

        <p className={styles.copyright}>
          &copy; Copyright {year.current}
        </p>
      </div>

      <div className={styles.rings}>
        <svg>
          <use href='/icons/pattern-rings.svg#icon'></use>
        </svg>
      </div>
    </footer>
  )
}

export default MainFooter