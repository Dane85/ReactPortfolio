import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../src/components/Nav.js";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects.js";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/icons-material/Menu";
import "./App.css";
import "../src/styles/Styles.scss";
import NotFound from "./pages/NotFound.js";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <IconButton
        variant="outlined"
        color="neutral"
        onClick={() => setOpen(true)}
      >
        <Menu />
      </IconButton>
      <Router>
        <Nav open={open} setOpen={setOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
