import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useStaticQuery } from 'gatsby';
import Section from '../layout/Section';
import Row from '../grid/Row';
import Spacer from '../Spacer';
import { ThemeContext } from '../theme';
import Button from '../Button';
import Posts from '../Posts';

const RecentPostsSection = ({ data }) => {
  const theme = useContext(ThemeContext);

  const categories = useStaticQuery(graphql`
    query {
      allCosmicjsCategories {
        edges {
          node {
            title
            slug
            metadata {
              color
            }
          }
        }
      }
      allCosmicjsPosts {
        edges {
          node {
            title
            content
            slug
            metadata {
              categories {
                slug
              }
              description
            }
          }
        }
      }
    }
  `);

  const includesCategory = (post, category) => {
    let boolean = null;

    post.metadata.categories &&
      post.metadata.categories.forEach((postCategory) => {
        if (postCategory.slug === category) {
          console.log(`${postCategory.slug} matches ${category}`);
          boolean = true;
        }
      });

    return boolean;
  };

  return (
    <Section
      noContainer
      background={`
      linear-gradient(
          to bottom,
          ${theme.color.gray.one},
          ${theme.color.gray.one} 20%,
          ${theme.color.gray.one}20
        )
      `}
      customStyles={`
        position: relative;
        padding-top: 0px;
        // margin-top: -120px;
        position: relative;
        // padding-top: 76px;
        z-index: 999;
        .container {
          padding-top: 0;
        }
          ::before {
            position: absolute;
            display: block;
            height: 100px;
            width: 100%;
            content: "";
            background: #f7f7f7;
            top: -50px;
            clip-path: ${theme.clip.top};
          }
      `}
    >
      <Title className='center'>Recent Posts</Title>
      {/* <PostsWrapper> */}
      {categories.allCosmicjsCategories &&
        categories.allCosmicjsCategories.edges.length > 0 &&
        categories.allCosmicjsCategories.edges.map(({ node }, index) => {
          const posts = categories.allCosmicjsPosts.edges.filter((item) =>
            includesCategory(item.node, node.slug)
          );

          if (posts) {
            return (
              <Posts
                // gray={index === 0 || index === 2 || index === 4 || index === 6}
                key={`${node.slug}-posts`}
                posts={posts}
                category={node.title}
                color={
                  (node.metadata &&
                    node.metadata.color &&
                    node.metadata.color) ||
                  theme.color.primary.main
                }
              />
            );
          }

          // posts &&
          //   posts.map((itemTwo) => {
          //     return (
          //       <Posts
          //         key={`${node.slug}-posts`}
          //         posts={posts}
          //         category={node.slug}
          //         color={
          //           (node.metadata &&
          //             node.metadata.color &&
          //             node.metadata.color) ||
          //           theme.color.primary.main
          //         }
          //       />
          //     );
          //   });
          // return (
          // <Posts
          //   key={`posts${node.slug}`}
          //   gray
          //   category={node.slug}
          // color={
          //   (node.metadata && node.metadata.color && node.metadata.color) ||
          //   theme.color.primary.main
          // }
          // />
          // );
        })}

      {/* <Posts category='Gatsby' color='#663399' />
      <Posts gray category='HTML/CSS' color='#F16529' /> */}
      {/* </PostsWrapper> */}
    </Section>
  );
};

const SVG = styled.svg`
  width: 100%;
  height: 80px;
`;

const BackgroundWrap = styled.div`
  filter: drop-shadow(0 -10px 16px #00000010);
  display: block;
  z-index: 999;
  width: 100%;
  path {
    width: 100%:
    height: 100%;
  }
`;

const PostsWrapper = styled.span``;

const Title = styled.h1`
  // color: white !important;
  position: relative;
  padding-bottom: 4px;
  // ::after {
  //   content: '';
  //   display: block;
  //   position: absolute;
  //   top: 0;
  //   left: calc(50% - 200px);
  //   width: 400px;
  //   height: 100%;
  //   background: white;
  //   z-index: -9;
  //   box-shadow: 12px 12px 0px 0px
  //     ${(props) => props.theme.color.primary.light},
  //     -12px -12px 0px 0px ${(props) => props.theme.color.primary.light},
  //     -17px 17px 0px -5px ${(props) => props.theme.color.primary.main},
  //     17px -17px 0px -5px ${(props) => props.theme.color.primary.main}
  //     ;
  // }
  // margin-bottom: 64px;
  // color: rgba(0, 0, 0, 0) !important;
  // text-shadow: 
  //    .05em .05em .05em rgb(255,255,255,.25),
  //     0 0 0 hsl(48, 86%, 69%) !important;
  // font-family: 'overpass', sans-serif !important;
  max-width: 750px;
`;

export default RecentPostsSection;
