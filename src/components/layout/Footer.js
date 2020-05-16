/* eslint-disable react/jsx-fragments */
import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Row from '../grid/Row';
import Line from '../Line';
import Section from './Section';
import { ThemeContext } from '../theme';
import Button from '../Button';
import Card from '../Card';
import logoWhite from '../../images/bare_invert.png';

const Footer = () => {
  const theme = useContext(ThemeContext);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError(false);
      const res = await fetch('/.netlify/functions/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    } else {
      setError(true);
    }
  };
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
            <h1 className='m-none'>Sign up for Weekly Five</h1>
            <p style={{ fontSize: 18, color: '#ffffffcc' }}>
              Get a weekly digest of five articles, all under five minutes.
            </p>
            <Form>
              <Card
                customStyles={`
                    height: 50px !important;
                    padding: 0 16px;
                    display: flex;
                    align-items: center;
                    border-radius: 5px;
                    margin-bottom: 12px;
                    @media(min-width: 769px) {
                      margin: 0;
                      flex: 1 1 0;
                      margin-right: 12px;
                    }
                  `}
              >
                <Input
                  value={email}
                  onChange={onEmailChange}
                  placeholder='elvis@rocknroll.com'
                />
              </Card>
              <Button
                customStyles='height: 50px !important; margin: 0 !important; width: fit-content;'
                onClick={onSubmit}
                left
                primary
              >
                Submit
              </Button>
            </Form>
          </div>
          {/* <Line
              height={2}
              width='30%'
              background={theme.color.primary.main}
              margin={16}
            />
            <h3 className='light weight-regular p'>
              Tips, tricks and tutorials to help you advance your career, five
              minutes at a time.
            </h3> */}
          <FooterFlex>
            <h3 className='logo'>
              <img src={logoWhite} alt='Five Minute Developer' />
            </h3>
            <FooterMenu>
              <LinkItem className='light' to='/contact'>
                Contact Us
              </LinkItem>
              {/* </div>
            <div widths={['auto']}>
              {' '} */}
              <LinkItem className='light' href='/contact'>
                Write for Us
              </LinkItem>
            </FooterMenu>
          </FooterFlex>
          {/* <FooterMenu widths={['auto']}>
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
          {/* <Row breakpoints={[0]} spacing={[24]}>
            <div widths={['auto']}> */}
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

const Form = styled.div`
  @media (min-width: 769px) {
    display: flex;
    align-items: center;
  }
`;

const Input = styled.input`
  display: block;
  border-radius: 5px;
  border: none;
  background: white;
  outline: none;
  width: 100%;
`;

const FooterFlex = styled.div`
  margin-top: 36px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Footer;
