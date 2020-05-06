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
            {/* <Categories>
              <Category>HTML</Category>
              <Category>CSS</Category>
              <Category>React</Category>
              <Category>Gatsby</Category>
            </Categories> */}
            <Title>
              Grow your web developer skillset, 5 minutes at a time.
            </Title>
            {/* <SubTitle>
              Tips, tricks and tutorials to help you advance your career, in
              bite-size chunks that you have time to read
            </SubTitle> */}
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
    ${(props) => props.theme.color.primary.main} 0%,
    ${(props) => props.theme.color.primary.light} 100%
  );
  position: absolute;
  top: 0;
  z-index: 0;
  height: 150%;
  width: 100%;
  z-index: -999;
  opacity: 1;
`;

const MainWrapper = styled.div`
  display: flex;
  height: 50vh;
  height: fit-content;
  align-items: center;
  margin-top: -94px;
  position: relative;
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
  color: white;
  font-size: 18px;
  padding: 12px;
  border-bottom: 1px solid white;
  transition: all 0.2s ease-out;
  :hover {
    cursor: pointer;
    border-bottom: 2px solid white;
    position: relative;
    top: 0;
    padding-bottom: 11px;
    transform: scale(1.03);
    transition: all 0.2s ease-out;
  }
`;

const Title = styled.h1`
  font-size: 46px;
  color: white !important;
  text-shadow: 2px 2px #00000020, 0px 0px 0 #ffffff50;
  @media (min-width: 769px) {
    font-size: 56px;
  }
  // font-family: 'overpass', sans-serif !important;
  margin-bottom: 16px;
  max-width: 750px;
`;

const SubTitle = styled.h3`
  color: #ffffffcc !important;
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
