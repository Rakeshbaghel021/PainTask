import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Summary from "./pages/Summary";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  if (!localStorage.getItem("data")) {
    localStorage.setItem(
      "data",
      JSON.stringify([
        {
          id: Math.random() * 1000,
          description: "",
          diagnosed: "NR",
          physical: "NR",
          mental: "NR",
          timeProblem: "NR",
          rating: 0,
          multicheck: [],
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
