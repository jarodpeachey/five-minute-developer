import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Button from '../Button';
import { isBrowser } from '../../utils/isBrowser';

const Menu = ({ scrolled }) => {
  return (
    <MenuWrapper scrolled={scrolled}>
      <MenuItem scrolled={scrolled}>
        <Link className='no-decoration' to='/'>
          React
        </Link>
      </MenuItem>
      <MenuItem scrolled={scrolled}>
        <Link className='no-decoration' to='/'>
          HTML/CSS
        </Link>
      </MenuItem>
      <MenuItem scrolled={scrolled}>
        <Link className='no-decoration' to='/'>
          Gatsby
        </Link>
      </MenuItem>
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

const MenuItem = styled.div`
  height: 100%;
  transition-duration: 0.25s;
  a {
    height: 100%;
    text-decoration: none;
    display: block;
    padding: ${(props) => (props.button ? '0' : '8px 16px')};

    font-weight: 500;
    transition-duration: 0.25s;
    color: ${(props) =>
      props.scrolled ? props.theme.color.primary.main : 'white'};
    border-radius: 5px;
  }
  :hover a {
    transition-duration: 0.25s;
    background: #ffffff30;
  }
`;

export default Menu;
