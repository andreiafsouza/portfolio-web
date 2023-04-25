import { ThemeContext } from './context/themeContext';
/* components */
import { Header } from '@src/components/Header';
/* router */
import { BrowserRouter } from 'react-router-dom';
import { Router } from './components/Router';
/* style */
import { darkTheme } from './theme/darkTheme';
import { lightTheme } from './theme/lightTheme';
import { GlobalStyleReset } from './stylesheets/base/reset';
import { useThemeMode } from './hooks/useThemeMode';
import { ThemeProvider } from 'styled-components';

function App() {
  const [theme, toggleTheme, componentMounted] = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themeMode}>
        <BrowserRouter>
          {/*  <Header /> */}
          <Router />
        </BrowserRouter>
        <GlobalStyleReset />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
