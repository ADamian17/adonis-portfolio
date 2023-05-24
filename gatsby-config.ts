import type { GatsbyConfig } from 'gatsby';
import dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Adonis Damian Martin | Portfolio`,
    siteUrl: process.env.GATSBY_SITE_URL,
    image: `/icons/favicon.ico`,
    description:
      "Nice to meet you! I'm Adonis D. Martin. Based in San Francisco, CA, I'm a front-end developer passionate about building accessible web apps that users love.",
  },
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: ['src/styles'],
        },
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        allPageHeaders: [
          'Strict-Transport-Security: max-age=31536000; includeSubDomains; preload',
        ],
        headers: {
          '/*': ['Cache-Control: public, max-age=31536000, immutable'],
        },
      },
    },
  ],
};

export default config;
