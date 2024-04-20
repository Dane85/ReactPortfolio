import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Lottie from "lottie-react";
import Layers from "../assets/animations/Layers.json";
import logotrans from "../assets/images/logotrans.png";
import MarqueeComponent from "../components/Marquee.js";
// Importing AOS library for animation
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  // Initialize AOS library for animations on component mount
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main>
      {/* Hero section */}
      <Container fluid className="heroContainer">
        <Container>
          <Row>
            {/* Column for hero text and logo */}
            <Col
              md={6}
              className="heroWordsCol"
              // Animation for fading in from the right
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <h1>Epic Expressions</h1>
              <h3>Digital Marketing Solutions</h3>
              {/* Logo image */}
              <img className="heroLogo" src={logotrans} alt="Logo" />
            </Col>
            {/* Column for hero animation */}
            <Col
              md={6}
              // Animation for fading in from the left
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              {/* Lottie animation component */}
              <Lottie className="layers" animationData={Layers} />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Introduction section */}
      <Container
        className="intro"
        // Animation for fading up
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <Row>
          {/* Introduction paragraph */}
          <p>
            Welcome to my portfolio! I'm Dane, an avid web development
            enthusiast committed to shaping extraordinary digital encounters. I
            thrive on the art of crafting websites that are not only visually
            captivating but also offer unparalleled functionality. Possessing a
            sharp sense of design aesthetics and a profound grasp of
            user-centric philosophies, my mission is to construct user-friendly
            online platforms that effortlessly harmonize style and utility. I
            aspire to make a lasting impact with my web development projects,
            ensuring that users enjoy a seamless and engaging journey when
            engaging with the digital solutions I bring to life.
          </p>
        </Row>
      </Container>

      {/* Marquee component */}
      <Container
        fluid
        // Animation for fading up
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {/* Marquee scrolling component */}
        <MarqueeComponent />
      </Container>

      {/* Footer */}
      <Footer />
    </main>
  );
}
