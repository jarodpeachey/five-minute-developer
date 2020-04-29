import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/sections/Hero';

const IndexPage = ({ data, location }) => {
  return (
    <span>
      <Hero />
      <div id='blur'></div>
      <SEO title='Home' />
    </span>
  );
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default IndexPage;
