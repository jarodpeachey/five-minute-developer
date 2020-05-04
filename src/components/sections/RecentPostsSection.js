import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from '../layout/Section';
import Row from '../grid/Row';
import Spacer from '../Spacer';
import { ThemeContext } from '../theme';
import Button from '../Button';
import { Link } from 'gatsby';
import Posts from '../Posts';

const RecentPostsSection = ({ data }) => {
  const theme = useContext(ThemeContext);

  return (
    <Section
      customStyles={`
        position: relative;
        padding-top: 0px;
        margin-top: -120px;
        position: relative;
        background: ${theme.color.gray.one};
        clip-path: ${theme.clip.top};
        padding-top: 76px;
        z-index: 999;
        // ::before {
        //   width: 140%;
        //   height: 300px;
        //   position: absolute;
        //   content: "";
        //   display: block;
        //   top: -100px;
        //   left: -20%;
        //   transform: rotate(-8deg);
        //   background: ${theme.color.gray.one};
        //   z-index: -999;
        // }
        .container {
          padding-top: 0;
        }
      `}
    >
      <Title className='center'>Recent Posts</Title>
      <Posts category='React' color='#61dafb' />
      <Posts category='Gatsby' color='#663399' />
      <Posts category='HTML/CSS' color='#F16529' />
    </Section>
  );
};

const Title = styled.h1`
  // color: white !important;
  position: relative;
  padding-bottom: 4px;
  // ::after {
  //   content: '';
  //   display: block;
  //   position: absolute;
  //   top: 0;
  //   left: calc(50% - 200px);
  //   width: 400px;
  //   height: 100%;
  //   background: white;
  //   z-index: -9;
  //   box-shadow: 12px 12px 0px 0px
  //     ${(props) => props.theme.color.primary.light},
  //     -12px -12px 0px 0px ${(props) => props.theme.color.primary.light},
  //     -17px 17px 0px -5px ${(props) => props.theme.color.primary.main},
  //     17px -17px 0px -5px ${(props) => props.theme.color.primary.main}
  //     ;
  // }
  // margin-bottom: 64px;
  // color: rgba(0, 0, 0, 0) !important;
  // text-shadow: 
  //    .05em .05em .05em rgb(255,255,255,.25),
  //     0 0 0 hsl(48, 86%, 69%) !important;
  // font-family: 'overpass', sans-serif !important;
  max-width: 750px;
`;

export default RecentPostsSection;
