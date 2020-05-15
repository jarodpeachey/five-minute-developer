import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/AboutSection';
import RecentPostsSection from '../components/sections/RecentPostsSection';
import Layout from '../components/layout/Layout';
import { Helmet } from 'react-helmet';

const IndexPage = ({ data, location }) => {
  return (
    <Layout>
      <Helmet>
        <title>Home - Five Minute Developer</title>
      </Helmet>
      <Hero />
      <AboutSection />
      <RecentPostsSection />
      <SEO />
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
