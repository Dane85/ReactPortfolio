import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Services from "./components/Services";

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
        <Link className="nav-links-services" to="/services">
          Services
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<Services />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
