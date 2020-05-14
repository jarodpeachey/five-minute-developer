import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery } from 'gatsby';
import Button from '../Button';
import { isBrowser } from '../../utils/isBrowser';

const Menu = ({ scrolled }) => {
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
    }
  `);

  return (
    <MenuWrapper scrolled={scrolled}>
      {categories.allCosmicjsCategories &&
        categories.allCosmicjsCategories.edges.length > 0 &&
        categories.allCosmicjsCategories.edges.map(({ node }) => {
          return (
            <MenuItem
              scrolled={scrolled}
              to={`/category/${node.slug}`}
              className='no-decoration'
            >
              {/* <FontAwesomeIcon icon='code' /> */}
              <span>{node.title}</span>
            </MenuItem>
          );
        })}
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
  @media (min-width: 769px) {
    display: flex;
  }
  margin-left: auto;
  display: none;
  align-items: center;
  height: 100%;
  transition-duration: 0.25s;
`;

const MenuItem = styled(Link)`
  height: 100%;
  transition-duration: 0.25s;
  height: 100%;
  text-decoration: none;
  display: block;
  padding: ${(props) => (props.button ? '0' : '8px 16px')};

  font-weight: 500;
  transition-duration: 0.25s;
  color: ${(props) =>
    props.scrolled ? props.theme.color.primary.main : 'white'};
  border-radius: 5px;
  :hover {
    transition-duration: 0.25s;
    background: #ffffff30;
  }
`;

export default Menu;
