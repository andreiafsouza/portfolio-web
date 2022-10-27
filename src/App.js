/* style */
import { GlobalStyleReset } from './stylesheets/base/reset';
import { colors } from './stylesheets/abstracts/palettes';
import { palettes } from './stylesheets/abstracts/palettes';
import { BackgroundLines } from './components/BackgroundLines';

import Icon from './teste';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        position: 'relative'
        /*     backgroundColor: colors.primary[900] */
      }}
    >
      <BackgroundLines style={{ position: 'absolute', top: 0, left: 0 }} />
      <div
        style={{
          minHeight: '100vh',
          minWidth: '100vw',
          position: 'absolute',
          top: 0,
          color: colors.primary[900]
        }}
      ></div>
      <Icon style={{ position: 'absolute', top: 0, left: 0, color: '#000' }} />

      <GlobalStyleReset />
    </div>
  );
}

export default App;
