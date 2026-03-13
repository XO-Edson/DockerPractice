import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import ApiData from "./ApiData";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/data">Get API Data</Link>
      </nav>

      <div className="card">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<ApiData />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;