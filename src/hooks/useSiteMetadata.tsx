import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const { site: {
    siteMetadata
  } } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          image
          siteUrl
        }
      }
    }
  `)

  return siteMetadata
}