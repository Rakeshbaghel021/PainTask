import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Summary from "./pages/Summary";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  if (!localStorage.getItem("data")) {
    localStorage.setItem(
      "data",
      JSON.stringify([
        {
          id: Math.random() * 1000,
          description: "",
          diagnosed: "nr",
          physical: "nr",
          mental: "nr",
          timeProblem: "nr",
          rating: 0,
        },
      ])
    );
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
