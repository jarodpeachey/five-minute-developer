import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../Card';
import { ThemeContext } from '../theme';

const Author = ({ author }) => {
  console.log(author);

  const theme = useContext(ThemeContext);

  return (
    <Card fancy title='Written by'>
      <StyledAuthor>
        <AuthorImage
          src={
            author && author.metadata.image
              ? author.metadata.image.url
              : 'https://cosmic-s3.imgix.net/a251c9e0-8a4f-11ea-8e16-e7cd20df21fe-jarodprofile.png'
          }
        />
        <AuthorInfo>
          <AuthorName>
            {author && author.title ? author.title : 'Jarod Peachey'}
          </AuthorName>
          <AuthorDescription>
            {author && author.metadata.description
              ? author.metadata.description
              : 'Jarod Peachey'}
          </AuthorDescription>
          {author &&
            author.metadata &&
            (author.metadata.twitter ||
              author.metadata.email ||
              author.metadata.github) && (
              <AuthorSocial>
                {author.metadata.email && (
                  <AuthorSocialItem
                    className='no-decoration'
                    title='Email'
                    href={`mailto:${author.metadata.email}`}
                  >
                    <FontAwesomeIcon icon='envelope' />
                  </AuthorSocialItem>
                )}
                {author.metadata.twitter && (
                  <AuthorSocialItem
                    className='no-decoration'
                    title='Twitter'
                    href={author.metadata.twitter}
                    color='#00acee'
                  >
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                  </AuthorSocialItem>
                )}
                {author.metadata.github && (
                  <AuthorSocialItem
                    className='no-decoration'
                    title='Github'
                    href={author.metadata.github}
                    color='#24292e'
                  >
                    <FontAwesomeIcon icon={['fab', 'github']} />
                  </AuthorSocialItem>
                )}
                {author.metadata.website && (
                  <AuthorSocialItem
                    className='no-decoration'
                    title='Website'
                    href={author.metadata.website}
                    color={theme.color.primary.light}
                  >
                    <FontAwesomeIcon icon='globe' />
                  </AuthorSocialItem>
                )}
              </AuthorSocial>
            )}
        </AuthorInfo>
      </StyledAuthor>
    </Card>
  );
};

const StyledAuthor = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

// const AuthorHeading = styled.h2`
//   margin: 0;
//   position: absolute;
//   top: -48px;
//   left: 10px;
// `;

const AuthorImage = styled.img`
  width: 75px !important;
  border-radius: 50px !important;
  margin-right: 14px !important;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.h3`
  margin: 0;
`;

const AuthorDescription = styled.p``;

const AuthorSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const AuthorSocialItem = styled.a`
  :first-child {
    margin-left: 0 !important;
  }
  display: block;
  margin: 0 6px;
  border-radius: 36px;
  height: 36px;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.color || props.theme.color.primary.main}20;
  color: ${(props) => props.color || props.theme.color.primary.main} !important;
  font-size: 18px;
  transition: background 0.2s ease-out;
  :hover {
    background: ${(props) => props.color || props.theme.color.primary.main}40;
    transition: background 0.2s ease-out;
  }
`;

export default Author;
