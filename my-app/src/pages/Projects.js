import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import MarqueeComponent from "../components/Marquee.js";
import AOS from "aos";
import "aos/dist/aos.css";
import BackToTop from "../components/BackToTop.js";
import FaceBookChatLink from "../components/FaceBookChatLink.js";
import MyProjects from "../components/MyProjects.js";
import ComingSoonProject from "../components/ComingSoonProject.js";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main>
      <Container style={{ textAlign: "center", paddingTop: "50px" }}>
        <h1>Projects</h1>
      </Container>
      <Container
        fluid
        className="projectSites"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <Row>
          <MyProjects />
        </Row>
      </Container>
      <Container style={{ textAlign: "center" }}>
        <h1>Coming Soon</h1>
      </Container>
      <Container
        fluid
        className="ComingSoonProject"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <Row>
          <ComingSoonProject />
        </Row>
      </Container>
      <Container fluid data-aos="fade-up" data-aos-duration="2000">
        <MarqueeComponent />
      </Container>
      <FaceBookChatLink />
      <BackToTop />
      <Footer />
    </main>
  );
}
