/* style */
import "./global.css";
import { colors } from "./stylesheets/abstracts/palettes";

function App() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: colors.primary[900] }}>
      <div style={{ color: colors.neutral[100] }} className="App">
        HELLO PORTFOLIO
      </div>
    </div>
  );
}

export default App;
