/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-fragments */
import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
// import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { Link, useStaticQuery } from 'gatsby';
import Menu from './Menu';
// import MobileMenu from './MobileMenu';
import { AppContext } from '../../providers/AppProvider';
import Button from '../Button';
import Spacer from '../Spacer';
import Row from '../grid/Row';
import { isBrowser } from '../../utils/isBrowser';
import { ThemeContext } from '../theme';
import whiteLogo from '../../images/bare_invert.png';

const Header = ({ siteTitle }) => {
  const { scrolled, setScrolled } = useContext(AppContext);
  const theme = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      setWidth();
      window.removeEventListener('scroll', onScroll);
    };
  });

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

  const toggleFunction = () => {
    setOpen(!open);
  };

  const onScroll = () => {
    if (window.scrollY > 40) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <div>
      {typeof window !== 'undefined' &&
      !window.location.pathname.includes('/signup') &&
      !window.location.pathname.includes('/login') ? (
        <>
          <Wrapper
            id='header'
            open={open}
            scrolled={scrolled}
            isBlog={isBrowser() && window.location.pathname.includes('blog')}
          >
            <div className='container'>
              <Flex>
                <SiteTitle
                  isBlog={
                    isBrowser() && window.location.pathname.includes('blog')
                  }
                  scrolled={scrolled}
                >
                  <Link
                    className='no-decoration'
                    to='/'
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <span className='logo'>
                      <img src={whiteLogo} alt='Five Minute Developer Logo' />
                    </span>
                    <span
                      className='desktop inline'
                      style={{ top: 1, position: 'relative' }}
                    >
                      Five Minute Developer
                    </span>
                  </Link>
                </SiteTitle>
                <Menu scrolled={scrolled} />
                {/* <MobileMenu scrolled={scrolled} /> */}
                <MobileMenuToggle
                  scrolled={scrolled}
                  onClick={toggleFunction}
                  open={open}
                >
                  <MobileMenuRotate open={open}>
                    <span />
                    <span />
                    <span />
                  </MobileMenuRotate>
                </MobileMenuToggle>
              </Flex>
            </div>
            {/* <MobileMenuOverlay open={open}> */}
            {/* </MobileMenuOverlay> */}
          </Wrapper>
          <MobileMenu
            width={width}
            id='mobile-menu'
            scrolled={scrolled}
            open={open}
            className='container'
          >
            <div className='container'>
              <h3 className='m-none'>Categories</h3>
              <Spacer height={18} />
              {categories.allCosmicjsCategories &&
                categories.allCosmicjsCategories.edges.length > 0 &&
                categories.allCosmicjsCategories.edges.map(({ node }) => {
                  return (
                    <MobileMenuItem
                      to={`/category/${node.slug}`}
                      color={
                        (node.metadata &&
                          node.metadata.color &&
                          node.metadata.color) ||
                        theme.color.primary.main
                      }
                      className='no-decoration'
                    >
                      {/* <FontAwesomeIcon icon='code' /> */}
                      <span>{node.title}</span>
                    </MobileMenuItem>
                  );
                })}
              <Spacer height={24} />
              <h3 className='m-none'>Other</h3>
              <Spacer height={18} />
              <MobileMenuItem className='no-decoration' to='/contact'>
                <span>Contact</span>
              </MobileMenuItem>
            </div>
          </MobileMenu>
        </>
      ) : null}
    </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

const Wrapper = styled.header`
  .container {
    padding-top: ${(props) =>
      props.isBlog ? '32px' : props.scrolled ? '8px' : '32px'};
    padding-bottom: ${(props) =>
      props.isBlog ? '32px' : props.scrolled ? '8px' : '32px'};
    transition: all 0.2s ease-out;
  }
  background: ${(props) =>
    props.isBlog
      ? '#ffffff05'
      : props.scrolled
      ? `linear-gradient(to bottom right, ${props.theme.color.primary.main}, ${props.theme.color.primary.light})`
      : 'transparent'};
  color: ${(props) =>
    props.isBlog ? 'white' : props.scrolled ? 'white' : 'white'} !important;
  a {
    color: ${(props) =>
      props.isBlog ? 'white' : props.scrolled ? 'white' : 'white'} !important;
  }
  transition: all 0.2s ease-out;

  box-shadow: ${(props) =>
    props.isBlog
      ? 'none'
      : props.open
      ? 'none'
      : props.scrolled
      ? `0 5px 60px -20px ${props.theme.color.primary.light}60`
      : ''};
  position: ${(props) => (props.isBlog ? 'absolute' : 'fixed')};
  left: 0;
  top: 0;
  right: 0;
  bottom: auto;
  z-index: 999;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const SiteTitle = styled.h1`
  margin: 0;
  margin-bottom: -1px;
  transition: all 0.2 ease-in;
  letter-spacing: 3px;
  text-transform: uppercase;
  display: flex;
  transition: all 0.2s ease-out;

  align-items: center;
  color: ${(props) =>
    props.isBlog ? 'white' : props.scrolled ? 'white' : 'white'} !important;
  .logo {
    font-size: 42px;
  }
  @media (min-width: 769px) {
    font-size: 22px;
    .logo {
      font-size: 46px;
    }
  }
  z-index: 999;
  svg {
    color: ${(props) =>
      props.scrolled ? props.theme.color.primary.main : 'white'} !important;
    margin-right: 8px;
    position: relative;
    top: -1px;
    transition: all 0.2s ease-out;
  }
`;

const MobileMenuToggle = styled.div`
  display: none;
  z-index: 9999;
  width: 30px;
  height: 30px;
  @media (max-width: 769px) {
    display: block;
  }
  transform: rotate(0deg);
  transition: all 0.2 ease-in;
  cursor: pointer;
  margin-left: auto;
  position: ${(props) => (props.open ? 'relative' : 'static')};
  // right: ${(props) => (props.open ? '12px' : 'none')};
  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: white;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: ${(props) =>
      props.open ? 'all 0.2 ease-in' : 'all 0.2 ease-out'};
  }

  span:nth-child(1) {
    top: ${(props) => (props.open ? 'calc(50% - 2px)' : '10%')};
    transform-origin: left center;
  }
  span:nth-child(2) {
    top: ${(props) => (props.open ? 0 : 'calc(50% - 2px)')};
    left: ${(props) => (props.open ? 'calc(50% - 2px)' : null)};
    width: ${(props) => (props.open ? '4px' : null)};
    height: ${(props) => (props.open ? '100%' : null)};
    transform-origin: left center;
  }
  span:nth-child(3) {
    top: calc(90% - 4px);
    transform-origin: left center;
    width: ${(props) => (props.open ? 0 : null)};
    opacity: ${(props) => (props.open ? 0 : 1)};
  }
`;

const MobileMenuRotate = styled.div`
  height: 100%;
  width: 100%;
  transition: ${(props) =>
    props.open ? 'all 0.2 ease-in-out' : 'all 0.2 ease-in-out'};
  transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'none')};
`;

const MobileMenu = styled.div`
  display: none;
  z-index: 9999999;
  @media (max-width: 769px) {
    display: block;
  }
  box-shadow: 2px 2px 30px -12px ${(props) => props.theme.color.gray.four};
  line-height: 1;
  // display: ${(props) => (props.open ? 'block' : 'none')};
  position: fixed;
  overflow: hidden;
  padding: 24px 0;
  top: 0;
  margin-top: ${(props) => (props.scrolled ? '64px' : '112px')};
  background: white;
  width: 100%;
  transition: all 0.15s ease-out;
  transform: scale(${(props) => (props.open ? '1' : '0')});
  border-bottom: 1px solid #e8e8e8;
  border-radius: 10px;
  width: calc(90%);
  right: 24px;
  width: calc(100% - 48px);
  height: fit-content
  .container {
    padding: 12px 10vw;
  }
`;

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MobileMenuItems = styled.div`
  display: block;
`;

const MobileMenuItem = styled(Link)`
  text-decoration: none;
  transition-duration: 0.2s;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  ::after {
    display: block;
    position: absolute;
    left: 16px;
    bottom: 6px;
    content: "";
    width: 20%;
    height: 2px;
    // background: ${(props) => props.color};
  }
  font-size: 16px;
  display: block;
  padding: 12px 16px;
  width: 100%;
  margin: 0;
  border-radius: 5px;
  transition-duration: 0.2s;
  svg {
    margin-right: 12px;
    font-size: 18px;
  }
  :hover {
    background: ${(props) => props.theme.color.gray.two};
    transition-duration: 0.2s;
  }
`;

export default Header;
