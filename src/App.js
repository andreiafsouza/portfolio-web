/* components */
import { Navbar } from './components/Navbar';
/* router */
import { useRoutes } from 'react-router-dom';
import routes from './routes';
/* style */
import { GlobalStyleReset } from './stylesheets/base/reset';
import { Theme } from './theme';

function App() {
  const router = useRoutes(routes);
  return (
    <Theme>
      <Navbar />
      {router}
      <GlobalStyleReset />
    </Theme>
  );
}

export default App;
