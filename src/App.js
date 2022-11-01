/* style */
import { GlobalStyleReset } from './stylesheets/base/reset';
/* pages */
import { Home } from './pages/home';

function App() {
  return (
    <>
      <Home />
      <GlobalStyleReset />
    </>
  );
}

export default App;
