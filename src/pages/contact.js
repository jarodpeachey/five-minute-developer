import React, { useContext, useEffect, useState } from 'react';
import { Link, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheck,
  faUser,
  faCalendar,
  faCommentAlt,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import Section from '../components/layout/Section';
import { ThemeContext } from '../components/theme';
import Line from '../components/Line';
import Author from '../components/post/Author';
import Spacer from '../components/Spacer';
import Layout from '../components/layout/Layout';
import Posts from '../components/Posts';
import Row from '../components/grid/Row';
import Button from '../components/Button';
import Card from '../components/Card';

library.add(faCheck, faUser, faCalendar, faCommentAlt, faArrowUp);

const Contact = ({ data, pageContext, location }) => {
  const theme = useContext(ThemeContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const onSubmit = (e) => {
    console.log(e);
    if (!message || !email || !name) {
      setError(true);
    } else {
      setError(false);

      const body = `
        ${message}
      `;

      const subject = `Message from ${name}`;

      window.location.href = `mailto:jwpeachey107@aol.com?subject=${subject}&body=${body}`;
    }
  };

  return (
    <Layout>
      <HeroWrapper>
        <HeroTitle>Contact Us</HeroTitle>
      </HeroWrapper>
      <Section verticalPadding>
        <Row spacing={[24]} breakpoints={[769]}>
          <div widths={[8]}>
            {error && (
              <>
                <Spacer height={27} />
                <Card error>Please fill in all the fields.</Card>
                <Spacer height={16} />
              </>
            )}
            <Row spacing={[8]} breakpoints={[576]}>
              <div widths={[6]}>
                <Label>Name</Label>
                <Card>
                  <Input
                    value={name}
                    onChange={onNameChange}
                    placeholder='Elvis Presley'
                  />
                </Card>
              </div>
              <div widths={[6]}>
                <Label>Email</Label>
                <Card>
                  <Input
                    value={email}
                    onChange={onEmailChange}
                    placeholder='elvis@rocknroll.com'
                  />
                </Card>
              </div>
              <div widths={[12]}>
                <Label>Message</Label>
                <Card>
                  <TextArea
                    value={message}
                    onChange={onMessageChange}
                    placeholder='This rocks!'
                  />
                </Card>
              </div>
              <div widths={[12]}>
                <Button onClick={onSubmit} left primary>
                  Submit
                </Button>
              </div>
            </Row>
          </div>
          <div widths={[4]}>
            <Spacer height={27} />
            <Card>
              <ProfileImage src='https://cosmic-s3.imgix.net/a251c9e0-8a4f-11ea-8e16-e7cd20df21fe-jarodprofile.png' />
              <h2>Jarod Peachey</h2>
              Email{' '}
              <Info>
                <a href='mailto:jarodpeachey@gmail.com'>
                  jarodpeachey@gmail.com
                </a>
              </Info>
              <br />
              Web{' '}
              <Info>
                <a href='https://jarodpeachey.netlify.com'>
                  jarodpeachey.netlify.com
                </a>
              </Info>
              <br />
              Twitter{' '}
              <Info>
                <a href='https://twitter.com/JarodPeachey'>
                  twitter.com/JarodPeachey
                </a>
              </Info>
            </Card>
          </div>
        </Row>
      </Section>
    </Layout>
  );
};

const HeroWrapper = styled.div`
  height: 225px;
  width: 100%;
  position: relative;
  margin-top: -94px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 53px;
  color: white;
  left: 0;
  background: ${(props) => props.theme.color.gray.eleven};
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.color.primary.main},
    ${(props) => props.theme.color.primary.main}
  );
`;

const HeroTitle = styled.h1`
  color: white !important;
  // text-transform: uppercase;
  // font-family: Montserrat;
  font-family: Roboto Mono !important;
  margin: 0 auto;
  padding-bottom: 16px;
  margin-bottom: -48px;
  font-size: 48px;
  position: relative;
  max-width: 769px;
  ::after {
    content: '';
    // position: absolute;
    // display: block;
    width: 70%;
    height: 3px;
    // background: white;
    background: black;
    left: 15%;
    bottom: 0;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  display: block;
  border-radius: 5px;
  border: none;
  background: white;
  outline: none;
  width: 100%;
`;

const TextArea = styled.textarea`
  display: block;
  border-radius: 5px;
  border: none;
  background: white;
  outline: none;
  width: 100%;
  min-height: 150px;
`;

const ProfileImage = styled.img`
  margin: 0 auto;
  width: 90px;
  height: 90px;
  border-radius: 100px;
  display: block;
`;

const Info = styled.span`
  margin-left: auto;
  display: inline-block;
  width: 100%;
  margin-bottom: 12px;
`;

export default Contact;
