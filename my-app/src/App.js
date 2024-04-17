import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import logotrans from "./assets/images/logotrans.png";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <Router>
      <nav className="navBar">
        <div>
          <img className="navLogo" src={logotrans} alt="Logo" />
        </div>
        <Link className="nav-links-home" to="/">
          Home
        </Link>
        <Link className="nav-links-about" to="/services">
          Services
        </Link>
        <Link className="nav-links-about" to="/about">
          About
        </Link>
        <Link className="nav-links-about" to="/contacts">
          Contacts
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
