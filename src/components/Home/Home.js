import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
import girlcoder from "../../Assets/girlcoder.png";
// import girlcoder from "../../Assets/coderrr.webp";

import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
// import Contact from "./Contact";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M 
                <strong className="main-name"> Ritika Sah </strong>
                <div>A Passionate and Motivated</div>
              </h1>

              <div style={{ padding: 40, textAlign: "left" }}>
  <Type />
  <br />
  {/* <a href="/contact">
    <button
      style={{
        marginTop: "20px",
        backgroundColor: "#6c63ff",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "25px",
        fontSize: "16px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      }}
    >
      Connect
    </button>
  </a> */}
</div>

            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={girlcoder}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      {/* <Contact/> */}
      
    </section>
  );
}

export default Home;
