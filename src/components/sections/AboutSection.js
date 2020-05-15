import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from '../layout/Section';
import Row from '../grid/Row';
import Spacer from '../Spacer';
import { ThemeContext } from '../theme';
import Button from '../Button';

const AboutSection = ({ data }) => {
  const theme = useContext(ThemeContext);

  return (
    <span>
      <BackgroundWrap>
        <Section
          customStyles={`
          background: white;
  display: block;
  opacity: 1;
  width: 100%;
  position: relative;
  z-index: 999;
  margin-top: 124px;
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
    top: -50px;
    clip-path: ${theme.clip.top};
  }
  padding-top: 112px; padding-bottom: 64px;      `}
        >
          {/* <Container
        className='container'
        style={{
          maxWidth: 576,
          background: 'white',
          padding: 32,
          paddingTop: 112,
          boxShadow: '2px 2px 15px -5px #999',
          borderRadius: 5,
          marginTop: '0px',
          position: 'absolute',
          top: 0,
          zIndex: 999,
          '@media(max-width: 576px)': {
            clipPath: theme.clip.mobileTop,
          },
        }}
      > */}
          <Icon
            style={{
              fontFamily: 'Raleway',
              fontWeight: 'bold',
            }}
          >
            {'<5>'}
          </Icon>
          <h1 className='center'>Learn like your career depends on it</h1>
          <p className='center'>Because it does.</p>
          <p className='center'>
            The web development industry is constantly changing and evolving.
            Whether it's a new language version, a new "best" method, or a new
            language all together, you have to stay on top of your game. That's
            why increasing your knowledge is vital to your career.
          </p>
          <p className='center'>
            And that's why I created Five Minute Developer. So you can learn new
            tricks, hacks, and languages*, without taking away your time
            (because time is money).
          </p>
          <p className='center'>
            Go ahead. Click the button to start learning!
          </p>
          <p className='center'>Seriously. Click it.</p>
          <Button link='#posts' center>
            Start Learning!
          </Button>
          <Spacer height={32} />
          <Footnote className='center'>
            * Five Minute Developer does not guarantee you will learn a new
            programming language in 5 minutes. Probably just parts of one. It's
            not physically possible to learn a new programming language in 5
            minutes.
          </Footnote>
          {/* </Container>
           */}
        </Section>
      </BackgroundWrap>
    </span>
  );
};

const Container = styled.div`
  max-width: 576px;
  background: white;
  padding: 32px;
  padding-top: 112px;
  box-shadow: 2px 2px 15px -5px #999;
  border-radius: 5px;
  margin-top: 0px;
  position: absolute;
  top: 0;
  z-index: 999;
  @media (max-width: 576px) {
    clip-path: ${(props) => props.theme.clip.tabletTop};
  }
`;

const BackgroundWrap = styled.div`
  filter: drop-shadow(0 -10px 16px #00000010);
  display: block;
  z-index: 999;
  width: 100%;
`;

const Icon = styled.div`
  top: -12px;
  position: absolute;
  left: 0;
  margin: 0 auto;
  width: 75px;
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.color.primary.main};
  font-size: 75px;
`;

const IconTwo = styled.div`
  top: 36px;
  position: absolute;
  left: 0;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.color.primary.main}50;
  font-size: 76px;
  margin-left: 2px;
  margin-top: 2px;
`;

const Background = styled(Section)``;

const Footnote = styled.small`
  display: block;
  font-size: 12px;
  margin-top: 16px;
  max-width: 650px !important;
  margin: 0 auto;
`;

export default AboutSection;
