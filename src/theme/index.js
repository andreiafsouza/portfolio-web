import { useState } from 'react';
import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';
import { ThemeProvider } from 'styled-components';

export const Theme = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
