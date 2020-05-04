import React from 'react';
import { Link, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import Section from '../components/layout/Section';
import styled from 'styled-components';

// import Bio from "../components/bio"
import SEO from '../components/SEO';

const PostTemplate = ({ data, pageContext, location }) => {
  const post = data.post;

  console.log(data);

  return (
    <Section
      customStyles={`
      padding-top: calc(50vh - 94px);
    `}
    >
      <FeaturedImage image={post.metadata.hero.url}>
        <div>
          {' '}
          <h1>{post.title}</h1>
          <small>by {post.metadata.author.title}</small>
        </div>
      </FeaturedImage>

      {/* <ReactMarkdown source={post.content} /> */}
      {post.metadata.markdown_content && (
        <ReactMarkdown source={post.metadata.markdown_content} />
      )}
      {!post.metadata.markdown_content && (
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      )}

      {/* {post.content} */}
    </Section>
  );
};

const FeaturedImage = styled.div`
  position: absolute;
  max-height: 50vh;
  height: 50vh;
  width: 100%;
  top: 0;
  overflow: hidden;
  left: 0;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  ::after {
    background: radial-gradient(#00000090, #000000 70%);
    display: block;
    max-width: 769px;
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    display: block;
    height: 100%;
  }
  background-image: url(${props => props.image});
`;

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    post: cosmicjsPosts(slug: { eq: $slug }) {
      metadata {
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
        markdown_content
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
`;
