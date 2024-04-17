import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import MarqueeComponent from "../components/Marquee.js";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import AlternateTimeline from "../components/AlternateTimeline.js";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main>
      <Container className="intro" data-aos="fade-up" data-aos-duration="2000">
        <Row className="aboutHeaderRow">
          <h1>About</h1>
          <h2>Epic Expressions</h2>
          <h3>Digital Marketing Solutions</h3>
          <p>
            Greetings! I'm Dane Watts, the creative force behind Epic
            Expressions Digital Marketing Solutions. As a fervent web
            development enthusiast, my mission is to craft extraordinary digital
            experiences that seamlessly blend creativity with functionality. I'm
            driven by the belief that well-designed websites not only captivate
            users but also deliver positive outcomes.
          </p>
        </Row>
      </Container>
      <AlternateTimeline />
      <Container fluid data-aos="fade-up" data-aos-duration="2000">
        <MarqueeComponent />
      </Container>
      <Footer />
    </main>
  );
}
