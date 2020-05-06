// const { isFuture } = require('date-fns');
// const { format } = require('date-fns');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      posts: allCosmicjsPosts(filter: { status: { eq: "published" } }) {
        edges {
          node {
            metadata {
              categories {
                title
                slug
              }
              author {
                metadata {
                  bio
                  email
                  github
                  twitter
                  website
                  image {
                    url
                  }
                }
                title
              }
              hero {
                url
              }
            }
            title
            published_at(formatString: "DD/MM/YYYY")
            content
            status
            slug
          }
        }
      }
      categories: allCosmicjsCategories {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `);

  console.log(result);

  if (result.errors) throw result.errors;

  result.data.posts.edges.forEach(({ node }, index) => {
    const path = `/blog/${node.slug}`;

    createPage({
      path,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: node.slug,
      },
    });
  });
};

// exports.createPages = async ({ graphql, actions }) => {
//   await createBlogPostPages(graphql, actions);
// };
