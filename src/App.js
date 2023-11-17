import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/HomePage/HomePage";
import FeaturePage from "../src/pages/FeaturePage/FeaturePage";
import Header from "../src/components/Header/header.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/feature" element={<FeaturePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
