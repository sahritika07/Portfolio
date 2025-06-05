import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import pic from "../../Assets/pic.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col xs={12} md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              ➣ I'm Ritika Sah, <span className="purple">a software developer with 1.5 years of experience</span> crafting modern web interfaces and interactive UI components using <span className="purple">React.js, Tailwind CSS, and MERN stack.</span>
              <br />
              <br />
              ➣ From crafting sleek UIs with <span className="purple">React.js and Tailwind CSS</span> to diving into the depths of <span className="purple">Node.js and MongoDB</span>, I thrive on turning complex ideas into clean, functional solutions.
              <br />
              <br />
              ➣ My field of interest is building new <span className="purple">Web Technologies and Products</span> and also exploring <span className="purple">Artificial Intelligence</span>.
              <br />
              <br />
              📌 Let’s connect if you’re looking for a software developer who’s creative, collaborative, and committed to growth!
            </p>
          </Col>

          <Col
            xs={12}
            md={4}
            className="myAvtar d-flex justify-content-center align-items-center mt-4 mt-md-0"
          >
            <Tilt>
              <img
                src={pic}
                className="img-fluid"
                alt="avatar"
                style={{
                  borderRadius: "50%",
                  maxWidth: "300px",
                  height: "auto",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sahritika07"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/your-linkedin-username/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              {/* Add Instagram if needed */}
              {/* <li className="social-icons">
                <a
                  href="https://instagram.com/your-username"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
