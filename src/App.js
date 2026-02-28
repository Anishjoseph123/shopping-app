import "./App.css";
import NavBar from "./NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/ChildRoutes/HomePage";
import AboutPage from "./views/ChildRoutes/AboutPage";
function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
