// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    title: 'The 5-Minute Developer',
    author: 'Jarod Peachey',
    description:
      'Level-up your development skills 5 minutes at a time with tips, tricks, tutorials and articles.',
    siteUrl: 'https://fiveminutedeveloper.netlify.app',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-cosmicjs',
      options: {
        bucketSlug: 'five-minute-developer', // Bucket Slug
        objectTypes: ['posts', 'categories'], // List of the Object Types you want to be able to request from Gatsby.
        apiAccess: {
          read_key: '5UgToyTzeJ411K1ZlM4b242npJOY4XwknC6xpi2E6zYP0Saxgp',
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'The 5 Minute Developer',
        short_name: '5 Minute Developer',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
  ],
};
