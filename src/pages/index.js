import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/AboutSection';
import RecentPostsSection from '../components/sections/RecentPostsSection';
import Layout from '../components/layout/Layout';

const IndexPage = ({ data, location }) => {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <RecentPostsSection />
      <SEO title='Home' />
    </Layout>
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
