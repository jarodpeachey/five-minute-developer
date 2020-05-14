import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const Card = ({ children, title, fancy, error }) => {
  return (
    <Wrapper>
      <StyledCard error={error} fancy={fancy}>
        {title && (
          <Title error={error} fancy={fancy}>
            {title}
          </Title>
        )}
        {children}
      </StyledCard>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  // margin: 16px 0;
  background: ${(props) => (props.window ? '#ffffff40' : 'white')};
  backdrop-filter: blur(8px);
`;

const StyledCard = styled.div`
  padding: 16px;
  // margin-bottom: 32px;
  background: ${(props) =>
    props.error ? `${props.theme.color.error}60` : 'white'};
  color: ${(props) => (props.error ? `${props.theme.color.error}` : '')};
  border-radius: 5px;
  border: ${(props) =>
    props.error
      ? 'none'
      : `1px solid ${props.theme.color.gray.three}`};
  // box-shadow: 2px 4px 10px 0px ${(props) => props.theme.color.gray.three};
  ${(props) =>
    props.fancy &&
    css`
      background: white;
      border-radius: 20px;
      position: relative;
      height: fit-content;
      width: fit-content;
      padding: 12px;
      border: none;
      box-shadow: 2px 2px 30px -12px ${props.theme.color.gray.four};
      margin-top: 64px;
      ::after {
        width: 100%;
        height: calc(100% + 64px + 16px);
        height: 120%;
        background: ${props.theme.color.gray.two};
        z-index: -1;
        border-radius: 20px;
        position: absolute;
        content: '';
        top: -64px;
        left: -16px;
      }
    `};
`;

const Title = styled.h4`
  margin: 0;
  padding-bottom: 12px;
  margin-bottom: 16px;
  border-bottom: 2px solid ${(props) => props.theme.color.gray.two};
  ${(props) =>
    props.fancy &&
    css`
      margin: 0;
      position: absolute;
      top: -48px;
      font-size: 1.5em;
      left: 12px;
      padding: 0;
      border: none;
    `};
`;

export default Card;
