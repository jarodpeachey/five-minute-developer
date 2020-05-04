/* eslint-disable import/prefer-default-export */
import React from 'react';

export const theme = {
  color: {
    success: '#00ab66',
    error: '#ff6347',
    text: {
      paragraph: '#636d72',
      heading: '#2e3c42',
      dark: '#0e1e24',
    },
    primary: {
      light: '#ffeb8c',
      main: '#f4d86a',
      dark: '#e8c547',
      darker: '#c7a62f',
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
  clip: {
    insetTop: 'polygon(38% 8%, 100% 0, 100% 100%, 0 100%, 0 0)',
    insetBottom: 'polygon(0 100%, 0 0, 100% 0, 100% 100%, 38% 92%)' ,
    top: 'polygon(38% 0, 100% 8%, 100% 100%, 0 100%, 0 8%)',
    bottom: 'polygon(0 92%, 0 0, 100% 0, 100% 92%, 38% 100%)'
  }
};

export const ThemeContext = React.createContext();

export const CustomThemeProvider = (props) => {
  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};
