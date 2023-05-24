import React from 'react'

import CustomLink from '../CustomLink';

import styles from "./Button.module.scss";

type ButtonType = {
  path: string,
  label: string
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"]
}

const Button: React.FC<ButtonType> = ({ path, label, target }) => {
  return (
    <CustomLink
      role="button"
      path={path}
      className={styles.button}
      target={target}>
      {label}
    </CustomLink>
  )
}

export default Button;