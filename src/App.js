/* components */
import { Navbar } from './components/Navbar';
/* pages */
import { Home } from './pages/home';
/* style */
import { GlobalStyleReset } from './stylesheets/base/reset';
import { Theme } from './theme';

function App() {
  return (
    <Theme>
      <Navbar />
      <Home />
      <GlobalStyleReset />
    </Theme>
  );
}

export default App;
