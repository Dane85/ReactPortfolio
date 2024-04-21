import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../src/components/Nav.js";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import ErrorPage from "./pages/NotFound.js";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/icons-material/Menu";
import "./App.css";
import "../src/styles/Styles.scss";

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
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
