import React from 'react'

import styles from "./MainFooter.module.scss"
import HeadingWrapper from '../../components/HeadingWrapper'
import FooterNav from './FooterNav'

type MainFooterType = {
  footerData: Queries.ContentfulPageTemplate["footerSection"]
}

const MainFooter: React.FC<MainFooterType> = ({ footerData }) => {
  const { headline, footerNav } = footerData!
  return (
    <footer className={styles.footer}>
      <HeadingWrapper copy={headline!} variant="light" />

      <FooterNav footerNavItems={footerNav} />

      {/* <form action="https://formkeep.com/f/8e6292454fc8" accept-charset="UTF-8" encType="multipart/form-data"
        method="POST" className="cta__form">
        <div className="cta__row">
          <input className="cta__input cta__input--error" type="text" name="first_name" id="firstName"
            placeholder="First name" />

          <input className="cta__input" type="text" name="last_name" id="lastName" placeholder="Last name" />
        </div>

        <div className="cta__row">
          <input className="cta__input" type="email" name="email" id="email" placeholder="Email" />
        </div>

        <textarea className="cta__message" name="message" id="message" cols={30} rows={10} placeholder="message"></textarea>

        <button className="btn cta__btn" type="submit">let's connect</button>
      </form>

      <ul className="footer-nav">
        <li className="footer-nav__item">
          <a href="https://github.com/ADamian17" target="_blank" className="footer-nav__link">
            <svg>
              <use href="assets/icons.svg#icon-github-square"></use>
            </svg>
            Github
          </a>
        </li>

        <li className="footer-nav__item">
          <a href="https://www.linkedin.com/in/adonismartin/" target="_blank" className="footer-nav__link">
            <svg>
              <use href="assets/icons.svg#icon-linkedin-square"></use>
            </svg>
            Linkedin
          </a>
        </li>

        <li className="footer-nav__item">
          <a href="/resume/resume2021.pdf" target="_blank" className="footer-nav__link">
            <svg>
              <use href="assets/icons.svg#icon-download"></use>
            </svg>
            Resume
          </a>
        </li>
      </ul>

    */}
      <p className={styles.copyright}>
        Adonis D. Martin &copy; Copyright 2021.
      </p>
    </footer>
  )
}

export default MainFooter