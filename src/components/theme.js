/* eslint-disable import/prefer-default-export */
import React from 'react';

export const theme = {
  color: {
    success: '#00ab66',
    error: '#ff6347',
    text: {
      paragraph: '#65615c',
      light: '#ffffffcc',
      heading: '#2e2c2a',
      dark: '#0e1e24',
    },
    primary: {
      lighter: '#f4d86a',
      light: '#f39f4a',
      main: '#F16529',
      dark: '#d24b11',
      darker: '#1B1513',
    },
    secondary: {
      light: '#4ecdc4',
      main: '#00d1ed',
      dark: '#255957',
    },
    gray: {
      one: '#f7f7f7',
      two: '#f3f3f3',
      three: '#e8e2dc',
      four: '#d3cac1',
      five: '#b8b0a8',
      six: '#9c958f',
      seven: '#817b76',
      eight: '#65615c',
      nine: '#4a4743',
      ten: '#2e2c2a',
      eleven: '#131211',
    },
  },
  clip: {
    insetTop: 'polygon(0 0, 50% 8%, 100% 0, 100% 100%, 0 100%)',
    insetBottom: 'polygon(100% 100%, 50% 92%, 0 100%, 0 0, 100% 0)',
    mobileTop: 'polygon(0 24%, 50% 0, 100% 24%, 100% 100%, 0 100%)',
    top: 'polygon(0 36%, 50% 0, 100% 36%, 100% 100%, 0 100%)',
    topArrow: 'polygon(50% 0%, 100% 36%, 100% 66%, 50% 66%, 0 66%, 0 36%);',
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
