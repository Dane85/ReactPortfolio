import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Container from "react-bootstrap/esm/Container";

function App() {
  return (
    <Router>
      <nav className="navBar">
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
