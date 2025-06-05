import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Contact() {
  return (
    <Container fluid className="home-section" id="contact">
      <Particle />
      <Container className="home-content text-white text-center" style={{ padding: "80px 0" }}>
        <Row>
          <Col>
            <h1 className="heading" style={{ fontSize: "3rem", color: "#ffffff" }}>
              Let's Connect!
            </h1>
            <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
              Feel free to reach out for collaboration, freelance work, or just a friendly hello. You can connect with me via email or any of my social platforms.
            </p>

            <div style={{ marginTop: "30px" }}>
              <a href="mailto:sahritika07@gmail.com" style={{ color: "#6c63ff", fontSize: "1.2rem" }}>
                sahritika07@gmail.com
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
