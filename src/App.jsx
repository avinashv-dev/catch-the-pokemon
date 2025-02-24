import GameArea from "./components/GameArea";
import { GameProvider } from "./context/GameContext";

function App() {
  return (
    <GameProvider>
      <GameArea />
    </GameProvider>
  );
}

export default App;
