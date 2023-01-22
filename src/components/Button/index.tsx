import React from 'react'

import CustomLink from '../CustomLink';

import styles from "./Button.module.scss";

type ButtonType = {
  path: string,
  label: string
}

const Button: React.FC<ButtonType> = ({ path, label }) => {
  return (
    <CustomLink
      role="button"
      path={path}
      className={styles.button}>
      {label}
    </CustomLink>
  )
}

export default Button;