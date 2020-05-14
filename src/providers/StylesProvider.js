/* eslint-disable no-nested-ternary */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import '../components/style.css';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme, CustomThemeProvider } from '../components/theme';
import { isBrowser } from '../utils/isBrowser';

export const StylesProvider = (props) => {
  let scrollbarWidth = 10;

  if (isBrowser()) {
    const outer = isBrowser() && document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    isBrowser() && document.body.appendChild(outer);

    // Creating inner element and placing it in the container
    const inner = isBrowser() && document.createElement('div');
    outer.appendChild(inner);

    // Calculating difference between container's full width and the child width
    scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);
  } else {
    scrollbarWidth = 10;
  }

  return (
    <CustomThemeProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        {props.children}
      </ThemeProvider>
    </CustomThemeProvider>
  );
};

const GlobalStyle = createGlobalStyle`
  width: 100vw !important;
  height: auto !important;
  display: inline-block !important;
  padding-right: ${(props) => props.width}px !important;
  p, ul, li, span, input, textarea {
    font-family: 'Heebo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  }
  p,
  small,
  code, a {
    color: ${(props) => props.theme.color.text.paragraph};
  }
  a {
    // background-color: ${(props) => props.theme.color.primary.main};
        background-image: -webkit-linear-gradient(left, ${(props) =>
          props.theme.color.primary.dark} 0%, ${(props) =>
  props.theme.color.primary.light} 80%);
    background-size: 100% 100%;
    color: transparent;
    background-position: 0 0;
    -webkit-transition: .1s .2s;
    -webkit-background-clip: text;
    text-decoration: none;
        transition: all .2s;
  }
  a:hover {
    border-bottom: 1px solid ${(props) => props.theme.color.primary.light};
  }
  a.light {
    color: #ffffff90;
    background-image: none;
  }
  a.light:hover {
        background-image: -webkit-linear-gradient(left, ${(props) =>
          props.theme.color.primary.dark} 0%, ${(props) =>
  props.theme.color.primary.light} 80%);
    background-size: 100% 100%;
    color: transparent;
    background-position: 0 0;
    -webkit-transition: .1s .2s;
    -webkit-background-clip: text;
    text-decoration: none;
        transition: all .2s;
  }
  a.no-decoration {
    background-image: none;
    color: inherit;
    transition: none;
    text-decoration: none;
  }
  .light {
    color: ${(props) => props.theme.color.text.light};
  }
  pre, code {
    overflow: auto;
    font-size: 14px;
    font-weight: 400;
  }
  code {
    color: ${(props) => props.theme.color.error} !important;
    padding: 4px;
    margin: 0 2px;
    background: #f7f7f7
  }
  pre {
    color: #ffffff;
    border-radius: 5px;
    background: linear-gradient(
      to right bottom,
      ${(props) => props.theme.color.gray.eleven},
      ${(props) => props.theme.color.gray.nine}
    );
    padding: 12px;
    font-family: 'Roboto Mono';
    code {
      background: transparent;
      color: #ffffff !important;
    }
  }
  strong {
    color: ${(props) => props.theme.color.text.dark} !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => props.theme.color.text.heading};
  }
`;
