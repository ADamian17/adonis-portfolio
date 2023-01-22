import { CreatePagesArgs } from 'gatsby';
import path from 'path';

export const createPages = async ({ graphql, actions }: CreatePagesArgs) => {
  const { createPage, createRedirect } = actions;

  const result: {
    errors?: any;
    data?: {
      allContentfulPageTemplate: Queries.ContentfulPageTemplateConnection;
    };
  } = await graphql(`
    query PageTemplates {
      allContentfulPageTemplate {
        nodes {
          id
          templateName
          slug
        }
      }
    }
  `);

  createRedirect({
    fromPath: '/',
    toPath: '/',
    isPermanent: true,
  });

  result.data?.allContentfulPageTemplate.nodes.forEach((node) => {
    const dirTarget = node.templateName?.replaceAll(' ', '-').toLowerCase();
    const templatePath = path.resolve(`src/templates/${dirTarget}/index.tsx`);

    createPage({
      path: `${node?.slug}`,
      component: templatePath,
      context: {
        id: node?.id,
      },
    });
  });
};
