import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBolt,
  faDesktop,
  faBars,
  faPuzzlePiece,
  faCog,
  faUser,
  faEnvelope,
  faShapes,
  faHome,
  faDollarSign,
  faTimes,
  faCode,
  faCheck,
  faGlobe,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  fab,
  faLinkedin,
  faGithub,
  faReact,
  faCss3,
  faHtml5,
  faCss3Alt,
  faTwitter,
  faJs,
  faJsSquare,
} from '@fortawesome/free-brands-svg-icons';
import Footer from './Footer';
import Header from './Header';
import { AppContext } from '../../providers/AppProvider';
import { pathnameIncludes } from '../../utils/pathnameIncludes';
import Notification from '../Notification';
import { isBrowser } from '../../utils/isBrowser';

library.add(
  faBars,
  faBolt,
  faDesktop,
  faPuzzlePiece,
  faCog,
  faEnvelope,
  faLinkedin,
  faGithub,
  faUser,
  faShapes,
  faHome,
  faDollarSign,
  faTimes,
  faReact,
  faCss3Alt,
  faHtml5,
  faCode,
  faCheck,
  faTwitter,
  faGlobe,
  faReact,
  faJs,
  faJsSquare,
  faCircle
);

const Layout = (props) => {
  const {
    editModalOpen,
    passwordModalOpen,
    notificationMessage,
    notificationType,
  } = useContext(AppContext);

  return (
    <Wrapper>
      <Header siteTitle={props.title} />
      {!pathnameIncludes('/signup') && !pathnameIncludes('/login') && (
        <ContentWrapper />
      )}
      {props.children}
      <Footer />
      {notificationMessage && (
        <Notification message={notificationMessage} type={notificationType} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  max-height: 99999999999999999px !important;
`;

const ContentWrapper = styled.div`
  height: 100%;
  padding-top: ${(props) => (props.scrolled ? '66px' : '94px')};
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
