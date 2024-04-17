import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Lottie from "lottie-react";
import MarqueeComponent from "../components/Marquee.js";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import Animation1 from "../assets/animations/Animation1.json";
import Animation2 from "../assets/animations/Animation2.json";
import Animation3 from "../assets/animations/Animation3.json";
import Animation4 from "../assets/animations/Animation4.json";

export default function Services() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main>
      <Container fluid>
        <Container>
          <Row className="headerRowService">
            <h1>Services</h1>
            <p>
              I can assist you with every aspect of the product development
              process, from ideation to prototyping to launch.
            </p>
          </Row>
        </Container>
      </Container>
      <hr
        style={{
          color: "white",
          backgroundColor: "none",
          height: "2px",
          width: "80%",
          margin: "auto",
        }}
      />
      <Container fluid>
        <Container>
          <Row
            data-aos="fade-up"
            data-aos-duration="2000"
            style={{ marginTop: "50px", marginBottom: "50px" }}
          >
            <Col md={4} className="serviceColTop">
              <h2>SEO Consulting</h2>
              <p>
                I can help you to improve your website's visibility in search
                engine results pages (SERPs). This can lead to more traffic to
                your website.
              </p>
            </Col>
            <Col md={4} className="serviceColTop">
              <h2>Web Development</h2>
              <p>
                I can help you to design and develop a new website, or to update
                your existing website. I specialize in creating user-friendly
                websites with nest practice and up to date standards.
              </p>
            </Col>
            <Col md={4} className="serviceColTop">
              <h2>Digital Strategy</h2>
              <p>
                I can help you to develop a digital strategy that will help you
                to achieve your business goals. This includes digital marketing
                for your business.
              </p>
            </Col>
          </Row>
          <hr
            style={{
              color: "white",
              backgroundColor: "none",
              height: "2px",
              width: "80%",
              margin: "auto",
            }}
          />
          <Row
            data-aos="fade-up"
            data-aos-duration="2000"
            style={{ marginTop: "50px", marginBottom: "50px" }}
          >
            <Col md={4} className="serviceColTop">
              <h2>Web Design</h2>
              <p>
                I can help you to create a visually appealing and user-friendly
                website. We take into account your brand identity and target
                audience.
              </p>
            </Col>
            <Col md={4} className="serviceColTop">
              <h2>Digital Marketing</h2>
              <p>
                I can help you to promote your business online through a variety
                of digital marketing channels, including SEO, PPC, and email
                marketing.
              </p>
            </Col>
            <Col md={4} className="serviceColTop">
              <h2>Media Production</h2>
              <p>
                I can help you to create high-quality videos, photos, and other
                media content. I can help you to distribute your content through
                a variety of channels.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid>
        <Container>
          <Row>
            <Col
              md={7}
              data-aos="fade-up"
              data-aos-duration="2000"
              className="serviceCol"
            >
              <h2>Simple Package</h2>
              <hr
                style={{
                  color: "white",
                  backgroundColor: "none",
                  height: "2px",
                  width: "80%",
                }}
              />
              <p>
                Our Simple package provides a streamlined solution, perfect for
                those initiating their online presence. With four pages, this
                package encompasses essential features for establishing your
                business online, ranging from a home page to key information
                pages. It covers the basics without overwhelming complexity,
                making it an ideal choice for a straightforward online presence.
                Each tier includes essential services such as server setup, SSL,
                and domain configuration, along with sitemap creation and mockup
                design.
              </p>
            </Col>
            <Col
              md={5}
              data-aos="fade-left"
              data-aos-duration="2000"
              className="serviceCol"
            >
              <Lottie animationData={Animation4} className="Animation4" />
            </Col>
          </Row>
          <Row>
            <Col
              md={6}
              data-aos="fade-right"
              data-aos-duration="2000"
              className="serviceCol"
            >
              <Lottie animationData={Animation2} className="Animation2" />
            </Col>
            <Col
              md={6}
              data-aos="fade-up"
              data-aos-duration="2000"
              className="serviceCol"
            >
              <h2>Business Package</h2>
              <hr
                style={{
                  color: "white",
                  backgroundColor: "none",
                  height: "2px",
                  width: "80%",
                }}
              />
              <p>
                Elevate your online presence with our Business package,
                specifically designed for growing enterprises. With six pages,
                this tier builds upon the Simple package by offering additional
                space for content and features. Ideal for businesses seeking to
                present more detailed information about their products or
                services, the Business package serves as a stepping stone
                towards a more comprehensive digital footprint. Each tier
                includes essential services such as server setup, SSL, and
                domain configuration, along with sitemap creation and mockup
                design. Additionally, it incorporates database setup with
                security measures and Two-Factor Authentication (2FA), as well
                as the integration of a blog, products, and social elements.
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              md={7}
              data-aos="fade-up"
              data-aos-duration="2000"
              className="serviceCol"
            >
              <h2>The Works Package</h2>
              <hr
                style={{
                  color: "white",
                  backgroundColor: "none",
                  height: "2px",
                  width: "80%",
                }}
              />
              <p>
                Our comprehensive Works package is tailored for businesses
                requiring a robust online platform. With eight pages, this tier
                allows for an expansive website featuring detailed content, an
                extended product catalog, and a more intricate presentation of
                your brand. The Works package is ideal for businesses aiming to
                make a significant impact in the digital landscape. Each tier
                includes essential services such as server setup, SSL, and
                domain configuration, along with sitemap creation and mockup
                design. Additionally, it incorporates database setup with
                security measures and Two-Factor Authentication (2FA), as well
                as the integration of a blog, products, and social elements.
                Critical services like SEO optimization, regular updates, and
                backups are also included. Moreover, we provide ongoing support
                for changes, maintenance, and training to ensure your website
                stays optimized and up-to-date with evolving business needs and
                technological advancements.
              </p>
            </Col>
            <Col
              md={5}
              data-aos="fade-left"
              data-aos-duration="2000"
              className="serviceCol"
            >
              <Lottie className="Animation3" animationData={Animation3} />
            </Col>
          </Row>
          <Row>
            <Col
              md={4}
              data-aos="fade-right"
              data-aos-duration="2000"
              className="serviceCol"
            >
              <Lottie className="Animation1" animationData={Animation1} />
            </Col>
            <Col
              md={8}
              data-aos="fade-up"
              data-aos-duration="2000"
              className="serviceCol"
            >
              <h2>Custom Package</h2>
              <hr
                style={{
                  color: "white",
                  backgroundColor: "none",
                  height: "2px",
                  width: "80%",
                }}
              />
              <p>
                For those with unique and specific requirements, our Custom
                package offers tailored solutions. The number of pages and
                features can vary based on your distinct needs. Whether you
                require specialized functionalities, intricate design elements,
                or a specific layout, the Custom package provides the
                flexibility to create a website that aligns precisely with your
                vision. Our team collaborates closely with you to understand
                your goals and deliver a bespoke online solution. Each tier
                includes essential services such as server setup, SSL, and
                domain configuration, along with sitemap creation and mockup
                design. Additionally, it incorporates database setup with
                security measures and Two-Factor Authentication (2FA), as well
                as the integration of a blog, products, and social elements.
                Critical services like SEO optimization, regular updates, and
                backups are also part of the offering. Furthermore, we offer
                ongoing support for changes, maintenance, and training to ensure
                your website stays optimized and up-to-date with evolving
                business needs and technological advancements.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid data-aos="fade-up" data-aos-duration="2000">
        <MarqueeComponent />
      </Container>
      <Footer />
    </main>
  );
}
