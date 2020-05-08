import React, { useContext, useEffect, useState } from 'react';
import { Link, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from '../components/layout/Section';
import profileImage from '../images/jarod_profile.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheck,
  faUser,
  faCalendar,
  faCommentAlt,
} from '@fortawesome/free-solid-svg-icons';
// import Bio from "../components/bio"
import SEO from '../components/SEO';
import { ThemeContext } from '../components/theme';
import Row from '../components/grid/Row';

library.add(faCheck, faUser, faCalendar, faCommentAlt);

const PostTemplate = ({ data, pageContext, location }) => {
  const { post } = data;
  const theme = useContext(ThemeContext);
  const [heroHeight, setHeroHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setHeroHeight(document.getElementById('wrapper').clientHeight);
    setContentHeight(document.getElementById('content').clientHeight);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  const onScroll = () => {
    setScroll(typeof window !== 'undefined' && window.scrollY);
  };

  return (
    <span>
      <FeaturedImageWrapper scroll={scroll} height={contentHeight} id='wrapper'>
        {/* <FeaturedImage src={post.metadata.hero.url} /> */}
        <ImageOverlay height={contentHeight} scroll={scroll} />
        <Seperator scroll={scroll} />
        <FeaturedImageContent
          scroll={scroll}
          height={contentHeight}
          id='content'
        >
          <div className='container'>
            <PostTitle height={contentHeight} scroll={scroll}>
              {post.title}
            </PostTitle>
            <PostTitleTwo height={contentHeight} scroll={scroll}>
              <span>{post.title}</span>
            </PostTitleTwo>
            {post.metadata.categories && post.metadata.categories.length > 0 && (
              <Categories height={contentHeight} scroll={scroll}>
                {post.metadata.categories.map((category) => {
                  return (
                    <Category
                      key={`category-${category.slug}`}
                      to={`/categories/${category.slug}`}
                    >
                      {category.title}
                    </Category>
                  );
                })}
              </Categories>
            )}
            <InfoWrapper scroll={scroll} height={contentHeight}>
              {post.metadata.author && post.metadata.author.title ? (
                <div widths={[4]}>
                  <Info scroll={scroll}>
                    <FontAwesomeIcon icon='user' />
                    <AuthorInfo>{post.metadata.author.title}</AuthorInfo>
                  </Info>
                </div>
              ) : (
                <div widths={[4]}>
                  <Info scroll={scroll}>
                    <FontAwesomeIcon icon='user' />
                    <AuthorInfo>Jarod Peachey</AuthorInfo>
                  </Info>
                </div>
              )}

              <div widths={[4]}>
                <Info scroll={scroll}>
                  <FontAwesomeIcon icon='calendar' />
                  12/27/2020
                </Info>
              </div>
              <div widths={[4]}>
                <Info scroll={scroll}>
                  <FontAwesomeIcon icon='comment-alt' />0 comments
                </Info>
              </div>
            </InfoWrapper>
          </div>
        </FeaturedImageContent>
      </FeaturedImageWrapper>
      <Section
        customStyles={`
          background: white;
  display: block;
  opacity: 1;
  width: 100%;
  position: relative;
  z-index: ${scroll > 140 ? 0 : 999} !important;
  // margin-top: 124px;
  display: block;
  .container {
    margin-top: -50px;
  }
  ::before {
    position: absolute;
    display: ${scroll > 99999999 ? 'none' : 'block'};
    height: 100px;
    width: 100%;
    content: "";
    background: white;
    top: -100px;
    clip-path: ${theme.clip.top};
  }
  position: relative;
  top: -94px;
   padding-top: 112px;      `}
      >
        {/* <ReactMarkdown source={post.content} /> */}
        {post.metadata.markdown_content && (
          <div id='post-content'>
            <ReactMarkdown source={post.metadata.markdown_content} />
          </div>
        )}
        {!post.metadata.markdown_content && (
          <div
            id='post-content'
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        )}

        {/* {post.content} */}
      </Section>
    </span>
  );
};

const FeaturedImageWrapper = styled.div`
  // max-height: 50vh;
  height: ${(props) => props.height + 94}px;
  width: 100%;
  position: relative;
  top: -94px;
  overflow: hidden;
  left: 0;
  padding-bottom: 100px;
  background: ${(props) => props.theme.color.gray.eleven};
  // z-index: ${(props) => (props.scroll > 140 ? '9999' : 'initial')};
`;

const FeaturedImage = styled.img`
  max-width: 769px;
  margin: 0 auto;
  display: block;
  top: -94px;
  // position: absolute;
  height: 100%;

  width: 100%;
`;

const Seperator = styled.div`
  ${(props) =>
    props.scroll > 99999999 &&
    css`
      position: fixed !important;
      display: block !important;
      height: 100px !important;
      width: 100% !important;
      background: white !important;
      clip-path: ${props.scroll > 414 && props.scroll < 475
        ? props.theme.clip.top
        : props.theme.clip.topArrow} !important;
      top: 78px !important;
      z-index: 999 !important;
      content: '';
    `}
`;

const FeaturedImageContent = styled.div`
  // position: fixed;
  // top: 0;
  height: auto;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 200px 0 64px;
  @media (max-width: 400px) {
    padding: 164px 0 64px;
  }
  // background: black;
  overflow: visible;
  // span {
  //   display: block;
  //   position: relative;
  //   // left: -50%;
  // }
  transition: 1s opacity ease-out !important;
`;

const PostTitle = styled.h1`
  color: white !important;
  text-transform: uppercase;
  font-family: Montserrat;
  font-family: Roboto Mono !important;
  margin: 0 auto;
  font-size: 48px;
  max-width: 769px;
  @media (max-width: 400px) {
    font-size: 38px;
  }
  transition: opacity 2s ease-out;
  opacity: ${(props) => (props.scroll > props.height - 300 ? 0 : 1)} !important;
`;

const PostTitleTwo = styled.h1`
  font-size: 22px;
  opacity: ${(props) => (props.scroll > props.height - 300 ? 1 : 0)};
  transition: 0.5s;
  background-filter: blur(200px);
  top: 0px;
  position: fixed;
  width: 100%;
  left: 0px;
  span {
    opacity: ${(props) => (props.scroll > props.height - 300 ? 1 : 0)};
    transition: ${(props) =>
      props.scroll > 480
        ? 'opacity 1s ease-out'
        : 'opacity .5s ease-out'} !important;
    color: white !important;
  }
  height: fit-content;
  z-index: 9999;
  margin-top: 0px;
  padding-top: 25px;
  background: ${(props) => props.theme.color.gray.eleven};
  padding-bottom: 12px;
  @media (max-width: 400px) {
    height: fit-content;
    // padding-bottom: 4px;
    padding: 8px 0;
    font-size: 20px;
  }
`;

const ImageOverlay = styled.div`
  max-width: 769px;
  margin: 0 auto;
  display: block;
  position: absolute;
  background-size: cover;
  top: 0;
  left: 50%;
  height: 100%;
  width: 100%;
  position: absolute;
  ::after {
    display: block;
    content: '';
    position: relative;
    left: -50%;
    width: 100%;
    background: radial-gradient(
      circle,
      rgba(19, 18, 17, 0.6292892156862745) 0%,
      rgba(19, 18, 17, 0.7329306722689075) 9%,
      rgba(19, 18, 17, 0.8421743697478992) 23%,
      rgba(19, 18, 17, 0.9542191876750701) 49%,
      rgba(19, 18, 17, 1) 65%
    );
    top: -100%;
    height: 100%;
  }
  ::before {
    display: block;
    content: '';
    position: relative;
    left: -50%;
    width: auto;
    height: 100%;
    background: url(https://cdn.auth0.com/blog/illustrations/gatsbyjs.png);
    background-size: cover;
    transition: 1s opacity ease-out;
    opacity: ${(props) =>
      props.scroll > props.height - 300 ? 0 : 1} !important;
  }
`;

const Categories = styled.div`
  // display: ${(props) => (props.scroll > 140 ? 'none' : 'flex')} !important;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-top: 24px;
    transition: opacity 2s ease-out;
  opacity: ${(props) => (props.scroll > props.height - 300 ? 0 : 1)} !important;
`;

const Category = styled(Link)`
  display: block;
  border-radius: 50px !important;
  // background: #ffffff20 !important;
  text-decoration: none !important;
  border: 2px solid #ffffff90 !important;
  color: #ffffff90 !important;
  padding: 2px 16px;
  font-size: 14px !important;
  transition: all 0.2s ease-out !important;
  :hover {
    color: #ffffff !important;
    background: #ffffff20 !important;
    transition: all 0.2s ease-out !important;
    border: 2px solid #ffffff !important;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 90px;
  transition: opacity 2s ease-out;
  opacity: ${(props) => (props.scroll > props.height - 300 ? 0 : 1)} !important;
`;

const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #ffffffcc !important;
  margin: 0px 12px;
  font-size: 14px;
  // display: ${(props) => (props.scroll > 140 ? 'none' : 'flex')} !important;
  svg {
    margin-right: 8px;
    color: #ffffff !important;
  }
`;

const AuthorBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  // padding: 16px;
  // border: 1px solid white;
  color: #ffffffcc !important;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: row;
  color: #ffffffcc !important;
`;

const AuthorImage = styled.img`
  max-width: 46px;
  height: auto;
  border-radius: 46px;
  width: 100%;
  height: 46px;
  margin-right: 12px;
  background: transparent;
  display: block;
  box-shadow: 0 0 0 2px #ffffff;
  color: #ffffffcc !important;
`;

const AuthorName = styled.div`
  margin: 0;
  font-size: 18px;
  color: #ffffffcc !important;
`;

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    post: cosmicjsPosts(slug: { eq: $slug }) {
      metadata {
        categories {
          title
          slug
        }
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
