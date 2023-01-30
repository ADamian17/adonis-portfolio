import React from "react";

import styles from "./HeadingWrapper.module.scss"

export type HeadingWrapperType = {
  copy: string
  variant: "light" | "dark"
  className?: string;
};

const HeadingWrapper: React.FC<HeadingWrapperType> = ({ copy, variant, className }) => {
  const colorVariant = {
    dark: styles.headingDark,
    light: styles.headingLight
  }

  const headingStyles = `${styles.heading} ${colorVariant[variant]}`

  return (
    <section className={`${styles.headingWrapper} ${className}`}>
      <h2 className={headingStyles}>{copy}</h2>
    </section>
  )
}

export default HeadingWrapper;