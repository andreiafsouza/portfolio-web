/* components */
import { Navbar } from './components/Navbar';
/* router */
import { useRoutes } from 'react-router-dom';
import routes from './routes';
/* style */
import { darkTheme } from './theme/darkTheme';
import { lightTheme } from './theme/lightTheme';
import { GlobalStyleReset } from './stylesheets/base/reset';
import { useThemeMode } from './hooks/useThemeMode';
import { ThemeProvider } from 'styled-components';

function App() {
  const router = useRoutes(routes);
  const [theme, toggleTheme, componentMounted] = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <Navbar toggleTheme={toggleTheme} />
      {router}
      <GlobalStyleReset />
    </ThemeProvider>
  );
}

export default App;
