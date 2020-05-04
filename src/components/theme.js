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
      lighter: '#ffeb8c',
      light: '#f4d86a',
      main: '#F16529',
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
    insetTop: 'polygon(0 0, 50% 8%, 100% 0, 100% 100%, 0 100%)',
    insetBottom: 'polygon(100% 100%, 50% 92%, 0 100%, 0 0, 100% 0)',
    mobileTop: 'polygon(0 24%, 50% 0, 100% 24%, 100% 100%, 0 100%)',
    top: 'polygon(0 36%, 50% 0, 100% 36%, 100% 100%, 0 100%)',
    bottom: 'polygon(100% 0, 100% 92%, 50% 100%, 0 92%, 0 0)',
    mobileBottom: 'polygon(100% 0, 100% 97%, 50% 100%, 0 97%, 0 0)',
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
