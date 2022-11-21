import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';
import { ThemeProvider } from 'styled-components';

export const Theme = ({ children }) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};
