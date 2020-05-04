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
  overflow: hidden !important;
  height: auto !important;
  display: inline-block !important;
  padding-right: ${(props) => props.width}px !important;
  p,
  small,
  code, a {
    color: ${(props) => props.theme.color.text.paragraph} !important;
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
    color: ${(props) => props.theme.color.text.heading} !important;
  }
`;

const StyleWrapper = styled.div`
  width: 100vw !important;
  overflow: hidden !important;
  height: auto !important;
  display: inline-block !important;
  padding-right: ${(props) => props.width}px !important;
  p,
  small,
  code {
    color: ${(props) => props.theme.color.text.paragraph} !important;
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
    color: ${(props) => props.theme.color.text.heading} !important;
  }
`;
