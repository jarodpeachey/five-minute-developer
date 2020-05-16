/* eslint-disable no-nested-ternary */
import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const Button = ({
  customStyles,
  children,
  primary,
  className,
  small,
  margin,
  secondary,
  gray,
  outlined,
  solid,
  onClick,
  right,
  left,
  center,
  medium,
  link,
  disabled,
}) => {
  return (
    <>
      {link ? (
        <Link
          className={
            left
              ? 'no-styling left'
              : center
              ? 'no-styling center'
              : right
              ? 'no-styling right'
              : 'no-styling'
          }
          to={link}
        >
          <StyledButton
            customStyles={customStyles}
            disabled={disabled}
            small={small}
            medium={medium}
            className={className || ''}
            right={right}
            left={left}
            center={center}
            margin={margin}
            secondary={secondary}
            gray={gray}
            outlined={outlined}
            onClick={onClick || null}
            link
          >
            {children}
          </StyledButton>
        </Link>
      ) : (
        <StyledButton
          customStyles={customStyles}
          disabled={disabled}
          small={small}
          medium={medium}
          className={className || ''}
          right={right}
          left={left}
          center={center}
          margin={margin}
          secondary={secondary}
          gray={gray}
          outlined={outlined}
          onClick={onClick || null}
        >
          {children}
        </StyledButton>
      )}
    </>
  );
};

const StyledButton = styled.button`
  padding: ${(props) =>
    props.small
      ? props.outlined
        ? ' 4px 12px'
        : '5px 13px'
      : props.medium
      ? props.outlined
        ? '6px 16px'
        : '7px 17px'
      : props.outlined
      ? '10px 25px'
      : '11px 26px'} !important;
  border: none !important;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'initial' : 'pointer')} !important;
  // transition-duration: 0.5s !important;
  letter-spacing: 1.1px !important;
  font-size: ${(props) => (props.small ? '13px' : '16px')} !important;
  font-weight: 600 !important;
  // z-index:  !important;
  display: block;
  overflow: hidden !important;
  position: relative !important;
  outline: none !important;
  margin: ${(props) => (props.margin ? '0 8px' : 0)};
  ${(props) =>
    props.right &&
    css`
      margin: 0 !important;
      margin-left: auto !important;
    `}
  background: linear-gradient(
    160deg,
    ${(props) => props.theme.color.primary.main} 0%,
    ${(props) => props.theme.color.primary.main} 100%
  );
  color: white;
  ${(props) =>
    props.left &&
    css`
      margin: 0 !important;
      margin-right: auto !important;
    `}
  ${(props) =>
    props.center &&
    css`
      margin: 0 auto !important;
    `}
  transition: all 0.1s ease-out;
  :hover {
box-shadow: ${(props) =>
  `4px 6px 28px -6px ${props.theme.color.primary.main}90`};
    transition: all 0.1s ease-out;
    transform: scale(1.01);
  }
  :active {
    transform: none;
    box-shadow: none;
    transition: all 0.1s ease-out;
  }
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;

export default Button;
