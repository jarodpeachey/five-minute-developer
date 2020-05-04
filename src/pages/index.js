import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/AboutSection';
import RecentPostsSection from '../components/sections/RecentPostsSection';

const IndexPage = ({ data, location }) => {
  return (
    <span>
      <Hero />
      <AboutSection />
      <RecentPostsSection />
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
