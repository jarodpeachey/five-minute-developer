/* eslint-disable react/jsx-fragments */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import Row from '../grid/Row';
import Line from '../Line';
import Section from './Section';
import { ThemeContext } from '../theme';

const Footer = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      {typeof window !== 'undefined' &&
      !window.location.pathname.includes('/signup') &&
      !window.location.pathname.includes('/login') ? (
        <Section verticalPadding dark>
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
        </Section>
      ) : null}
    </>
  );
};

const FooterWrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.color.primary.backgroundDark};
  color: white;
  display: block;
  margin-top: auto;
`;

const FooterTitle = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  height: 50px;
  h2 {
    margin: 0;
  }
`;

const FooterContainer = styled.div`
  padding-top: 10px !important;
  padding-bottom: 10px !important;
`;

const FooterMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterMenuLink = styled.a`
  padding: 12px !important;
  font-size: 18px !important;
  width: 50px;
  height: 50px;
  text-decoration: none;
  background: transparent !important;
  color: white !important;
  display: block;
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  * {
    font-size: 22px !important;
  }
  :hover {
    background: #ffffff30 !important;
  }
`;

export default Footer;
