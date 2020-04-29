/* eslint-disable import/prefer-default-export */
import React from 'react';

export const theme = {
  color: {
    success: '#00ab66',
    error: '#ff6347',
    text: {
      light: '#f7fff7',
      dark: '#292f36',
    },
    primary: {
      light: '#ffeb8c',
      main: '#f4d86a',
      dark: '#e8c547',
      darker: '#c7a62f'
    },
    secondary: {
      light: '#4ecdc4',
      main: '#00d1ed',
      dark: '#255957',
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
