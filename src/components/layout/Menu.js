import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Button from '../Button';
import { isBrowser } from '../../utils/isBrowser';

const Menu = ({ scrolled }) => {
  return (
    <MenuWrapper scrolled={scrolled}>
      <MenuItem>
        <Link to='/'>Home</Link>
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
    padding: ${(props) => (props.button ? '0' : '8px 24px')};
    font-weight: 500;
    transition-duration: 0.25s;
    color: ${(props) => props.theme.color.text.light};
  }
  :hover a {
    transition-duration: 0.25s;
    color: ${(props) =>
      props.button ?
        '' : props.theme.color.primary.dark} !important;
  }
`;

export default Menu;
