import React, { useContext, useEffect, useState } from 'react';
import { Link, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import styled, { css } from 'styled-components';
import Section from '../components/layout/Section';
import profileImage from '../images/jarod_profile.png';

// import Bio from "../components/bio"
import SEO from '../components/SEO';
import { ThemeContext } from '../components/theme';

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
        <ImageOverlay scroll={scroll} />
        <Seperator scroll={scroll} />
        <FeaturedImageContent id='content'>
          <div className='container'>
            <PostTitle
              style={
                scroll > 390
                  ? {
                      // width: `100vw`,
                      position: 'fixed',
                      width: '100vw',
                      maxWidth: '999999px',
                      top: '104px',
                      textAlign: 'center',
                      left: -9,
                      display: 'block',
                      height: '273px',
                      marginTop: `-${390 / 4 + 50}px`,
                      paddingTop: '144px',
                      backgroundColor: 'black',
                      fontSize: `${Math.max(10, 48 - 0.05 * 390)}px`,
                    }
                  : {
                      fontSize: `${
                        scroll < 390
                          ? Math.max(10, 48 - 0.05 * scroll)
                          : Math.max(10, 48 - 0.05 * 390)
                      }px`,
                      marginTop: `-${scroll < 390 ? scroll / 4 : ''}px`,
                      position: 'sticky',
                      top: 0,
                      maxWidth: 769,
                    }
              }
              scroll={scroll}
            >
              {post.title}
            </PostTitle>
            <PostInfo scroll={scroll}>
              <PostDate>12/27/2020</PostDate>
              <PostComments>0 comments</PostComments>
            </PostInfo>
            {post.metadata.categories && post.metadata.categories.length > 0 && (
              <Categories scroll={scroll}>
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
  z-index: ${scroll > 390 ? 0 : 999} !important;
  // margin-top: 124px;
  display: block;
  .container {
    margin-top: -50px;
  }
  ::before {
    position: absolute;
    display: block;
    height: 100px;
    width: 100%;
    content: "";
    background: white;
    top: -100px;
    clip-path: ${theme.clip.top};
    ${
      scroll > 390 &&
      css`
        display: none !important;
      `
    }
  }
  position: relative;
  top: -94px;
   padding-top: 112px;      `}
      >
        {/* <ReactMarkdown source={post.content} /> */}
        {/* {post.metadata.author && post.metadata.author.title ? (
          <AuthorBox>
            <AuthorImage src={post.metadata.author.metadata.image.url} />
            <AuthorName>{post.metadata.author.title}</AuthorName>
          </AuthorBox>
        ) : (
          <AuthorBox>
            <AuthorImage src='https://cdn.cosmicjs.com/434379b0-5f2e-11e8-b73f-cb1681c50ff2-skyline-new-york-empire-state-building-skyscraper-39695.jpeg?q=&auto=compress,enhance,format,redeye,' />
            <AuthorName>Jarod Peachey</AuthorName>
          </AuthorBox>
        )} */}
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
  background: ${(props) => (props.scroll > 390 ? 'transparent' : '#000')};
  z-index: ${(props) => (props.scroll > 390 ? '9999' : 'initial')};
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
    props.scroll > 390 &&
    css`
      position: fixed !important;
      display: block !important;
      height: 100px !important;
      width: 100% !important;
      background: white !important;
      clip-path: ${props.theme.clip.topArrow} !important;
      top: 164px !important;
      z-index: 999 !important;
      content: '';
    `}
`;

const Indicator = styled.div`
  height: 3px;
  width: ${(props) => props.percent}%;
  z-index: 9999 !important;
  display: ${(props) => (props.scroll > 390 ? 'block' : 'none')};
  position: fixed;
  top: calc(164px + calc(100px * 0.62));
  left: 0;
  content: '';
  background: ${(props) => props.theme.color.primary.main};
`;

const SeperatorTwo = styled.div``;

const FeaturedImageContent = styled.div`
  position: fixed;
  top: 0;
  height: auto;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 200px 0 64px;
  // background: black;
  overflow: visible;
  // span {
  //   display: block;
  //   position: relative;
  //   // left: -50%;
  // }
`;

const PostTitle = styled.h1`
  color: white !important;
  text-transform: uppercase;
  font-family: Montserrat;
  font-family: Roboto Mono !important;
  margin: 0 auto;
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
  ${(props) =>
    props.scroll > 390 &&
    css`
      position: fixed !important;
      height: 220px !important;
      overflow: hidden;
      z-index: -1;
    `}
  ::after {
    display: block;
    content: '';
    position: relative;
    left: -50%;
    width: 100%;
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.6292892156862745) 0%,
      rgba(0, 0, 0, 0.7329306722689075) 9%,
      rgba(0, 0, 0, 0.8421743697478992) 23%,
      rgba(0, 0, 0, 0.9542191876750701) 49%,
      rgba(0, 0, 0, 1) 65%
    );
    top: calc(-100%);
    height: 100%;
    ${(props) =>
      props.scroll > 390 &&
      css`
        z-index: 0 !important;
      `}
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
    ${(props) =>
      props.scroll > 390 &&
      css`
        position: relative;
        z-index: -1 !important;
        max-height: 263px !important;
      `}
  }
`;

const PostInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 769px;
  margin: 0 auto;
  padding-left: 12px;
  display: ${(props) => (props.scroll > 390 ? 'none' : 'flex')} !important;
`;

const PostDate = styled.small`
  color: #ffffffcc !important;
  margin-top: 24px;
  padding-bottom: 8px;
  position: relative;
  // ::after {
  //   display: block;
  //   content: '';
  //   width: 6px;
  //   height: 6px;
  //   position: absolute;
  //   bottom: -3px;
  //   right: calc(50% - 3px);
  //   border-radius: 6px;
  //   background: #ffffff90;
  // }
`;

const PostComments = styled.small`
  color: #ffffffcc !important;
  padding-top: 8px;
`;

const Categories = styled.div`
  display: ${(props) => (props.scroll > 390 ? 'none' : 'flex')} !important;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-top: 64px;
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

const AuthorBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  top: -72px;
`;

const AuthorImage = styled.img`
  max-width: 75px;
  height: auto;
  border-radius: 75px;
  width: 100%;
  height: 75px;
  background: transparent;
  display: block;
  margin-bottom: 16px;
  box-shadow: 0 0 0 2px ${(props) => props.theme.color.primary.main};
`;

const AuthorName = styled.h4`
  margin: 0;
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
