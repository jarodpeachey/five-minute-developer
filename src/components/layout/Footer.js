/* eslint-disable react/jsx-fragments */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import Row from '../grid/Row';
import Line from '../Line';
import Section from './Section';
import { ThemeContext } from '../theme';
import { Link } from 'gatsby';

const Footer = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      {typeof window !== 'undefined' &&
      !window.location.pathname.includes('/signup') &&
      !window.location.pathname.includes('/login') ? (
        <Section
          customStyles={`
            h1, h2 {
              color: white !important;
            }
          `}
          verticalPadding
          dark
        >
          <div className='center'>
            <h1 className='logo'>5 Minute Developer</h1>
            <Line
              height={2}
              width='30%'
              background={theme.color.primary.main}
              margin={16}
            />
            <h3 className='light weight-regular p'>
              Tips, tricks and tutorials to help you advance your career, five
              minutes at a time.
            </h3>
            <LinkItem className='light' to='/contact'>
              Contact Us
            </LinkItem>
            {/* </div>
            <div widths={[6]}>
              {' '} */}
            <LinkItem className='light' href='/contact'>
              Write for Us
            </LinkItem>

            {/* <FooterMenu widths={[6]}>
              <FooterMenuLink
                className='no-decoration'
                href='mailto:jwpeachey107@aol.com'
              >
                <FontAwesomeIcon icon='envelope' />
              </FooterMenuLink>

              <FooterMenuLink
                className='no-decoration'
                href='https://github.com/jarodpeachey'
              >
                <FontAwesomeIcon icon={['fab', 'github']} id='menu-toggle' />
              </FooterMenuLink>

              <FooterMenuLink
                className='no-decoration'
                href='https://linkedin.com/in/jarod-peachey'
              >
                <FontAwesomeIcon icon={['fab', 'linkedin']} id='menu-toggle' />
              </FooterMenuLink>
            </FooterMenu> */}
          </div>
          {/* <Row breakpoints={[0]} spacing={[24]}>
            <div widths={[6]}> */}
          {/* </div>
          </Row> */}
        </Section>
      ) : null}
    </>
  );
};

const Title = styled.h3`
  color: white;
  margin-top: 0;
`;

const LinkItem = styled(Link)`
  display: inline-block;
  margin: 0 8px;
  font-size: 14px;
`;

export default Footer;
