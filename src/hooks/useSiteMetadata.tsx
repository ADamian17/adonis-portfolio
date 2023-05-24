import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = (): Queries.SiteSiteMetadata => {
  const { site: {
    siteMetadata
  } } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          image
          siteUrl
          description
        }
      }
    }
  `)

  return siteMetadata
}