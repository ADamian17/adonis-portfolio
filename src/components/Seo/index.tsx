import React from "react";
import { useSiteMetadata } from "../../hooks/useSiteMetadata";

export type SeoType = {
  title: string,
  pathname: string,
  children: React.ReactNode
};

const Seo: React.FC<Partial<SeoType>> = ({ title, pathname, children }) => {
  const { title: defaultTitle, image, siteUrl } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="image" content={`${siteUrl}/images/hero-image.png`} />
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} /> */}
      <link rel="icon" href={seo.image} />

      {children}
    </>
  )
}

export default Seo;