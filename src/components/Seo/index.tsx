import React from "react";
import { useSiteMetadata } from "../../hooks/useSiteMetadata";

export type SeoType = {
  title: string;
  pathname: string;
  description: string;
  children: React.ReactNode;
};

const Seo: React.FC<Partial<SeoType>> = ({ title, pathname, description, children }) => {
  const { title: defaultTitle, image, siteUrl, description: defaultDescription } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    description: description || defaultDescription
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description!} />
      <meta name="image" content={`${siteUrl}/images/hero-image.png`} />

      <link rel="icon" href={seo.image} />
      {children}
    </>
  )
}

export default Seo;