import React, { useEffect } from "react";

import Container from "react-bootstrap/esm/Container";
import HoneyBookForm from "../components/Honeybookform.js";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import MarqueeComponent from "../components/Marquee";

export default function Contacts() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main>
      <HoneyBookForm />
      <Container fluid data-aos="fade-up" data-aos-duration="2000">
        <MarqueeComponent />
      </Container>
      <Footer />
    </main>
  );
}
