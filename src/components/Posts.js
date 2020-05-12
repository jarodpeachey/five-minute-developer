import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery } from 'gatsby';
import Row from './grid/Row';
import Section from './layout/Section';
import { shortenText } from '../utils/shortenText';

const Posts = ({ category, color, gray, posts }) => {
  console.log(posts);

  return (
    <Section background={gray ? '#f7f7f7' : 'transparent'} verticalPadding>
      <CategoryTitle color={color}>{category}</CategoryTitle>
      <Row spacing={[24]} breakpoints={[576, 769]}>
        {posts.map((post) => {
          return (
            <div key={`${post.node.title}-post`} widths={[6, 4]}>
              <Post to={`/blog/${post.node.slug}`} color={color} gray={gray}>
                <PostTitle color={color}>{post.node.title}</PostTitle>
                <PostExcerpt>
                  {shortenText(post.node.metadata.description, 100)}
                </PostExcerpt>
              </Post>
            </div>
          );
        })}
      </Row>
    </Section>
  );
};

export const PostsQuery = graphql`
  query PostsByCategory($category: String!) {
    posts: cosmicjsPosts(
      metadata: { categories: { elemMatch: { slug: { eq: $category } } } }
    ) {
      title
      published_at(formatString: "DD/MM/YYYY")
      content
      status
      slug
    }
  }
`;

const CategoryTitle = styled.h3`
  margin: 0 auto !important;
  width: fit-content;
  margin-top: 64px;
  position: relative;
  padding: 8px 0;
  margin-bottom: 32px !important;
  // color: white !important;
  z-index: 9999;
  display: block;
  ::after {
    content: '';
    background: ${(props) => props.color} !important;
    width: 200px;
    height: 3px;
    position: absolute;
    left: calc(50% - 100px);
    bottom: -12px;
    z-index: -1;
    box-shadow: 0px 8px 0 0px ${(props) => props.color}20;
  }
`;

const Post = styled(Link)`
  padding: 16px;
  border-radius: 5px;
  position: relative;
  top: 0;
  left: 0;
  border-left: 5px solid ${(props) => props.color};
  background: white;
  text-decoration: none;
  display: block;
  transition: all 0.2s ease-out;
  box-shadow: ${(props) =>
    !props.gray ?
      `12px 12px 0px ${props.color}20, 0px -4px 0px #f7f7f7` :
      `12px 12px 0px ${props.color}20`};
  :hover {
    transition: 0.2s ease-out;
    box-shadow: 20px 20px 0px -3px ${(props) => props.color}20;
    position: relative;
    transition: all 0.2s ease-out;
    top: -3px;
    left: -3px;
    transform: scale(1.01);
    h3 {
      color: ${(props) => props.color};
      transition: 0.1s ease-out;
    }
  }
  :active {
    transform: none;
    box-shadow: 4px 4px 0px 0px ${(props) => props.color}20;
    position: relative;
    top: 8px;
    left: 8px;
    transition: top left 0.2s ease-out;
  }
`;

const PostTitle = styled.h3`
  margin-top: 0;
  font-size: 16px;
  transition: 0.4s ease-out;
  margin-bottom: 8px;
`;

const PostExcerpt = styled.p`
  margin: 0;
  transition: 0.4s ease-out;
  font-size: 14px;
  line-height: 1.4em;
`;

export default Posts;
