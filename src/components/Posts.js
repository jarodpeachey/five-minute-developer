/* eslint-disable react/jsx-fragments */
import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Row from './grid/Row';
import Section from './layout/Section';
import { shortenText } from '../utils/shortenText';
import Button from './Button';

const Posts = ({ category, color, gray, posts, list }) => {
  return (
    <>
      {list ? (
        <Row spacing={[16]} breakpoints={[1200]}>
          {posts.map((post) => {
            return (
              <div key={`${post.node.title}-post`} widths={[6, 4]}>
                <ListPost
                  className='no-decoration'
                  to={`/blog/${post.node.slug}`}
                  color={color}
                  gray={gray}
                >
                  <ListPostTitle color={color}>{post.node.title}</ListPostTitle>
                  <InfoWrapper>
                    {post.node.metadata.author &&
                    post.node.metadata.author.title ? (
                      <div widths={[4]}>
                        <Info>
                          <FontAwesomeIcon icon='user' />
                          <AuthorInfo>
                            {post.node.metadata.author.title}
                          </AuthorInfo>
                        </Info>
                      </div>
                    ) : (
                      <div widths={[4]}>
                        <Info>
                          <FontAwesomeIcon icon='user' />
                          <AuthorInfo>Jarod Peachey</AuthorInfo>
                        </Info>
                      </div>
                    )}

                    <div widths={[4]}>
                      <Info>
                        <FontAwesomeIcon icon='calendar' />
                        12/27/2020
                      </Info>
                    </div>
                  </InfoWrapper>
                  {post.node.metadata.categories &&
                    post.node.metadata.categories.length > 0 && (
                      <Categories>
                        {post.node.metadata.categories.map((category) => {
                          return (
                            <Category
                              className='no-decoration'
                              key={`category-${category.slug}`}
                              to={`/category/${category.slug}`}
                            >
                              {category.title}
                            </Category>
                          );
                        })}
                      </Categories>
                    )}
                  <ListPostExcerpt>
                    {post.node.metadata.markdown_content ? (
                      <ReactMarkdown
                        source={shortenText(
                          post.node.metadata.markdown_content,
                          350
                        )}
                      />
                    ) : (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: shortenText(post.node.content, 350),
                        }}
                      />
                    )}
                  </ListPostExcerpt>
                  <Button small>Read More</Button>
                </ListPost>
              </div>
            );
          })}
        </Row>
      ) : (
        <Section
          background={gray ? '#f7f7f7' : 'transparent'}
          customStyles={`
        padding-bottom: 48px;
      `}
        >
          <CategoryTitle color={color}>{category}</CategoryTitle>
          <Row spacing={[16]} breakpoints={[576, 769]}>
            {posts.map((post) => {
              return (
                <div key={`${post.node.title}-post`} widths={[6, 4]}>
                  <Post
                    to={`/blog/${post.node.slug}`}
                    color={color}
                    gray={gray}
                  >
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
      )}
    </>
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
  margin-bottom: 48px !important;
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
  border: 1px solid ${(props) => props.theme.color.gray.three};
  position: relative;
  top: 0;
  left: 0;
  border-left: 5px solid ${(props) => props.color};
  background: white;
  text-decoration: none;
  display: block;
  transition: all 0.2s ease-out;

  :hover {
    transition: 0.2s ease-out;
    box-shadow: 16px 16px 0px -3px ${(props) => props.color}20;
    box-shadow: 8px 8px 0px ${(props) => props.color}20;
    position: relative;
    border: 1px solid ${(props) => props.theme.color.gray.three} !important;
    border-left: 5px solid ${(props) => props.color} !important;
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

const ListPost = styled(Link)`
  position: relative;
  text-decoration: none;
  top: 0;
  margin-bottom: 56px;
  left: 0;
  background: white;
  text-decoration: none;
  display: block;
  ::after {
    height: 3px;
    position: absolute;
    display: block;
    content: '';
    width: 100px;
    left: calc(50% - 50px);
    bottom: -48px;
    background: ${(props) => props.theme.color.primary.main};
  }
`;

const ListPostTitle = styled.h2`
  margin-top: 0;
  transition: 0.4s ease-out;
  margin-bottom: 8px;
  font-weight: 500;
`;

const ListPostExcerpt = styled.p`
  margin: 0;
  transition: 0.4s ease-out;
  font-size: 16px;
  line-height: 1.4em;
  h2 {
    display: none;
  }
`;

const Categories = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: auto;
  margin-top: 8px;
  margin-bottom: 36px;
  display: none;
`;

const Category = styled(Link)`
  display: block;
  border-radius: 50px !important;
  // background: #ffffff20 !important;
  text-decoration: none !important;
  border: 2px solid ${(props) => props.theme.color.text.heading}90 !important;
  color: ${(props) => props.theme.color.text.heading} !important;
  padding: 2px 12px;
  margin-right: 6px;
  font-size: 11px !important;
  transition: all 0.1s ease-out !important;
  :hover {
    // color: ${(props) => props.theme.color.text.heading} !important;
    background: ${(props) => props.theme.color.text.heading}20 !important;
    transition: all 0.1s ease-out !important;
    border: 2px solid ${(props) => props.theme.color.text.heading} !important;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  flex-direction: column-reverse;
  margin-top: 8px;
`;

const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // color: #ffffffcc !important;
  font-size: 14px;
  margin-bottom: 4px;
  svg {
    margin-right: 4px;
    // color: #ffffff !important;
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: row;
  // color: #ffffffcc !important;
`;

export default Posts;
