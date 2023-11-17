import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/HomePage/HomePage";
import FeaturePage from "../src/pages/FeaturePage/FeaturePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/feature" element={<FeaturePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
