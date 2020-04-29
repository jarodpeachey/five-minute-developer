import React from 'react';
import { Link, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import Section from '../components/layout/Section';

// import Bio from "../components/bio"
import SEO from '../components/SEO';

const PostTemplate = ({ data, pageContext, location }) => {
  const post = data.post;

  console.log(data);

  return (
    <Section>
      <img style={{ width: '100%' }} src={post.metadata.hero.url} />
      <h1>{post.title}</h1>
      <small>by {post.metadata.author.title}</small>
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
