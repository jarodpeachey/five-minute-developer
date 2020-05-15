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
      <SEO
        title='Home - Five Minute Developer'
        description='Tips, tricks and articles on modern web development. Posts about React, Gatsby, HTML, CSS, Javscript and more!'
      />
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
