import React from "react";
import Footer from "../components/Footer";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Lottie from "lottie-react";
import heroMoon from "../assets/animations/heroMoon.json";

function Home() {
  return (
    <main>
      <Container fluid className="heroContainer">
        <Lottie className="heroMoon" animationData={heroMoon} />
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
      <Footer />
    </main>
  );
}

export default Home;
