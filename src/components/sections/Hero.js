/* eslint-disable react/jsx-fragments */
import React, { useState, useEffect, useContext } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled, { ThemeContext, css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button';
import heroImage from '../../images/hero.png';
import heroImageTwo from '../../images/heroTwo.png';

const Hero = ({ children }) => {
  const [scrollValue, setScrollValue] = useState(0);
  const theme = useContext(ThemeContext);

  return (
    <span>
      <div id='blur'>
        <MainWrapper>
          <Background></Background>
          <HeroContainer className='container'>
            <Categories>
              <Category>HTML</Category>
              <Category>CSS</Category>
              <Category>React</Category>
              <Category>Gatsby</Category>
            </Categories>
            <Title>
              Grow your web developer skillset, 5 minutes at a time.
            </Title>
            <SubTitle>
              Tips, tricks and tutorials to help you advance your career, in
              bite-size chunks that you have time to read
            </SubTitle>
            {/* <Button center secondary>
              Let's Go!
            </Button> */}
          </HeroContainer>
          {/* </BackgroundImage> */}
        </MainWrapper>
      </div>
      {/* // ); */}
      {/* // }} */}
      {/* // /> */}
    </span>
  );
};

const Background = styled.div`
  background: linear-gradient(
    160deg,
    ${(props) => props.theme.color.primary.main}90 0%,
    ${(props) => props.theme.color.primary.light}40 100%
  );
  position: absolute;
  top: 0;
  z-index: 0;
  height: 125%;
  width: 100%;
  opacity: 1;
clip-path: polygon(100% 0, 100% 89%, 38% 100%, 0 96%, 0 0);
  ::after {
    top: 0;
    left:0;
    transform: rotate(0deg);
    display: block;
    content: '';
    position: absolute;
    width: 200%;
    height: 100%;
    clip-path: polygon(0 0, 100% 0%, 100% 83%, 0 62%);
    z-index: 2;
    background: linear-gradient(
      to bottom,
      ${(props) => props.theme.color.primary.main} 0%,
      ${(props) => props.theme.color.primary.light}00 100%
    );
  }
  ::before {
    top: 0;
    right: 0;
    transform: scaleX(-1);
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    clip-path: polygon(0 0, 100% 0%, 100% 83%, 0 62%);
    z-index: 2;
    background: linear-gradient(
      to bottom,
      ${(props) => props.theme.color.primary.main} 0%,
      ${(props) => props.theme.color.primary.light}00 100%
    );
  }
`;

const MainWrapper = styled.div`
  // padding-top: 64px;
  // height: 100vh;
  display: flex;
  height: fit-content;
  align-items: center;
  margin-top: -94px;
  z-index: 3;
  position: relative;
  ::after {
    top: -100px;
    transform: rotate(0deg);
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    clip-path: polygon(0 0, 100% 0%, 100% 83%, 0 62%);
    z-index: 2;
    background: linear-gradient(
      to bottom,
      ${(props) => props.theme.color.primary.darker}90 0%,
      ${(props) => props.theme.color.primary.main}00 100%
    );
  }
  ::before {
    top: -100px;
    right: -200px;
    transform: scaleX(-1) rotate(15deg);
    display: block;
    content: '';
    position: absolute;
    width: 200%;
    height: 100%;
    clip-path: polygon(0 0, 100% 0%, 100% 83%, 0 62%);
    z-index: 2;
    background: linear-gradient(
      to bottom,
      ${(props) => props.theme.color.primary.darker}90 0%,
      ${(props) => props.theme.color.primary.main}00 100%
    );
  }
`;

const HeroContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  min-height: 420px !important;
  margin: 0 auto;
  width: 100%;
  z-index: 3;
  padding-top: 120px !important;
`;

const Categories = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Category = styled.span`
  color: ${(props) => props.theme.color.text.light};
  font-size: 18px;
  padding: 12px;
  border-bottom: 1px solid ${(props) => props.theme.color.text.light};
  transition: all 0.2s ease-out;
  :hover {
    cursor: pointer;
    border-bottom: 2px solid ${(props) => props.theme.color.text.light};
    position: relative;
    top: 0;
    padding-bottom: 11px;
    transform: scale(1.03);
    transition: all 0.2s ease-out;
  }
`;

const Title = styled.h1`
  font-size: 38px;
  color: ${(props) => props.theme.color.text.dark} !important;
  @media (min-width: 769px) {
    font-size: 44px;
  }
  // font-family: 'overpass', sans-serif !important;
  margin-bottom: 16px;
  max-width: 750px;
`;

const SubTitle = styled.h3`
  color: ${(props) => props.theme.color.text.dark}cc !important;
  font-size: 26px;
  max-width: 750px;
  text-transform: none;
`;

const ButtonFlex = styled.div`
  margin: 0 -8px;
  @media (min-width: 520px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }
  padding-bottom: 12px;
`;

const ButtonWrapper = styled.div`
  padding: 8px !important;
  button {
    margin: 0 !important;
  }
`;

export default Hero;
