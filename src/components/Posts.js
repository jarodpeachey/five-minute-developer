import React from 'react';
import styled from 'styled-components';
import Row from './grid/Row';
import { Link } from 'gatsby';

const Posts = ({ category, color }) => {
  return (
    <span>
      <CategoryTitle>{category}</CategoryTitle>
      <Row spacing={[24]} breakpoints={[576, 769]}>
        <div widths={[6, 4]}>
          <Post color={color}>
            <PostTitle color={color}>Using React Hooks With Gatsby</PostTitle>
            <PostExcerpt>
              React Hooks and Gatsby are two powerful tools, and using them
              together makes things a lot easier.
            </PostExcerpt>
          </Post>
        </div>
        <div widths={[6, 4]}>
          <Post color={color}>
            <PostTitle color={color}>Using React Hooks With Gatsby</PostTitle>
            <PostExcerpt>
              React Hooks and Gatsby are two powerful tools, and using them
              together makes things a lot easier.
            </PostExcerpt>
          </Post>
        </div>
        <div widths={[6, 4]}>
          <Post color={color}>
            <PostTitle color={color}>Using React Hooks With Gatsby</PostTitle>
            <PostExcerpt>
              React Hooks and Gatsby are two powerful tools, and using them
              together makes things a lot easier.
            </PostExcerpt>
          </Post>
        </div>
        <div widths={[6, 4]}>
          <Post color={color}>
            <PostTitle color={color}>Using React Hooks With Gatsby</PostTitle>
            <PostExcerpt>
              React Hooks and Gatsby are two powerful tools, and using them
              together makes things a lot easier.
            </PostExcerpt>
          </Post>
        </div>
        <div widths={[6, 4]}>
          <Post color={color}>
            <PostTitle color={color}>Using React Hooks With Gatsby</PostTitle>
            <PostExcerpt>
              React Hooks and Gatsby are two powerful tools, and using them
              together makes things a lot easier.
            </PostExcerpt>
          </Post>
        </div>
      </Row>
    </span>
  );
};

const CategoryTitle = styled.h2`
  margin: 0 auto;
  width: fit-content;
  margin-top: 64px;
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
  box-shadow: 12px 12px 0px ${(props) => props.color}20;
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
  transition: 0.4s ease-out;
`;

const PostExcerpt = styled.p`
  margin-bottom: 0;
  transition: 0.4s ease-out;
`;

export default Posts;
