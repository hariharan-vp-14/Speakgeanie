import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import PlayerScreen from "./screens/PlayerScreen";
import QuizScreen from "./screens/QuizScreen";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <div className="pb-16">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/player/:id" element={<PlayerScreen />} />
        <Route path="/quiz/:id" element={<QuizScreen />} />
      </Routes>

      <BottomNav />
    </div>
  );
}

export default App;
