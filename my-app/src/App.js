import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <Router>
      <nav>
        <Link className="nav-links-home" to="/">
          Home
        </Link>
        <Link className="nav-links-about" to="/about">
          About
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
