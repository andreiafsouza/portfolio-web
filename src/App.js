/* style */
import { GlobalStyleReset } from './stylesheets/base/reset';
import { Theme } from './theme';
/* pages */
import { Home } from './pages/home';

function App() {
  return (
    <Theme>
      <Home />
      <GlobalStyleReset />
    </Theme>
  );
}

export default App;
