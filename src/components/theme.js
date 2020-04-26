/* eslint-disable import/prefer-default-export */
import React from 'react';

export const theme = {
  color: {
    success: '#00ab66',
    error: '#ff6347',
    text: {
      light: '#FFFFE7',
      dark: '#21211E',
    },
    primary: {
      light: '#ffb81e',
      main: '#f39237',
      dark: '#FF6C11',
    },
    secondary: {
      light: '#0bc7d8',
      main: '#0bd0a1',
      dark: '#0ad86a',
    },
    gray: {
      one: '#f7f7f7',
      two: '#f3f3f3',
      three: '#e9e9e9',
    },
  },
};

export const ThemeContext = React.createContext();

export const CustomThemeProvider = (props) => {
  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};
