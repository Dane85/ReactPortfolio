import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logotrans from "../assets/images/logotrans.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import CurrentYear from "./CurrentYear.js";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md={4} className="footerCol">
          <img className="footerLogo" src={logotrans} alt="Logo" />
        </Col>
        <Col md={4} className="footerCol">
          <h3>Epic Expressions</h3>
          <a href="tel+12899289013">289 928 9013</a>
          <CurrentYear />
        </Col>
        <Col md={4} className="footerCol">
          <h3>Social Media</h3>
          <div className="socialIcons">
            <a href="https://www.facebook.com/" className="socialIcon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.facebook.com/" className="socialIcon">
              <FontAwesomeIcon className="socialIcon" icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/" className="socialIcon">
              <FontAwesomeIcon className="socialIcon" icon={faLinkedinIn} />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
