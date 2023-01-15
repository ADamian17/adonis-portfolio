import React from "react";
import { Link, GatsbyLinkProps } from "gatsby";

import styles from "./CustomLink.module.scss"

export type CustomLinkType = {
  children: React.ReactNode
  path: string;
};

const CustomLink: React.FC<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > & CustomLinkType
> = ({
  children,
  target,
  path,
  ...rest
}) => {
    const link = target ? (
      <a
        href={path}
        target={target}
        {...rest}
      >
        {children}
      </a>
    ) : (
      <Link to={path} {...rest}>{children}</Link>
    )

    return link;
  }

export default CustomLink;