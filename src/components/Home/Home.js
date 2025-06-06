"use client"
import { Container, Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
// import homeLogo from "../../Assets/home-main.svg";
import girlcoder from "../../Assets/girlcoder.png"
// import girlcoder from "../../Assets/coderrr.webp";

import Particle from "../Particle"
import Home2 from "./Home2"
import Type from "./Type"
// import Contact from "./Contact";

function Home() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const waveAnimation = {
    animate: {
      rotate: [0, 14, -8, 14, -4, 10, 0],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 1,
      },
    },
  }

  const imageFloat = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <>
      <style jsx>{`
  @media (max-width: 768px) {
    .home-section {
      padding-top: 50px !important;
      padding-bottom: 30px !important;
    }
    
    .home-content {
      padding: 10px 0 !important;
    }
    
    .home-header {
      text-align: center !important;
      padding: 10px 15px !important;
    }
    
    .home-header h1 {
      font-size: clamp(1.8rem, 5vw, 2.5rem) !important;
      padding-bottom: 8px !important;
      line-height: 1.3 !important;
    }
    
    .main-name {
      font-size: clamp(1.5rem, 4vw, 2rem) !important;
      line-height: 1.2 !important;
    }
    
    .heading-name {
      line-height: 1.4 !important;
      margin-bottom: 15px !important;
    }
    
    .type-container {
      padding: 20px 10px !important;
      text-align: center !important;
    }
    
    .home-image {
      text-align: center;
      margin-top: 20px !important;
      padding-bottom: 10px !important;
    }
    
    .home-image img {
      max-height: 300px !important;
      width: auto;
    }
  }

  @media (max-width: 576px) {
    .home-section {
      padding-top: 30px !important;
      padding-bottom: 20px !important;
    }
    
    .home-content {
      padding: 5px 0 !important;
    }
    
    .home-header {
      padding: 5px 10px !important;
    }
    
    .home-header h1 {
      font-size: clamp(1.5rem, 6vw, 2rem) !important;
      padding-bottom: 5px !important;
      line-height: 1.2 !important;
      margin-bottom: 8px !important;
    }
    
    .main-name {
      font-size: clamp(1.2rem, 5vw, 1.8rem) !important;
      line-height: 1.1 !important;
    }
    
    .heading-name {
      line-height: 1.3 !important;
      margin-bottom: 10px !important;
    }
    
    .type-container {
      padding: 15px 5px !important;
    }
    
    .home-image {
      margin-top: 15px !important;
      padding-bottom: 5px !important;
    }
    
    .home-image img {
      max-height: 250px !important;
    }
  }

  .wave {
    display: inline-block;
  }
`}</style>

      <section>
        <Container fluid className="home-section" id="home">
          <Particle />
          <Container className="home-content">
            <motion.div variants={containerVariants} initial="hidden" animate="visible" viewport={{ once: true }}>
              <Row className="align-items-center">
                <Col md={7} className="home-header">
                  <motion.h1 variants={slideInLeft} style={{ paddingBottom: 15 }} className="heading">
                    Hi There!{" "}
                    <motion.span
                      className="wave"
                      role="img"
                      aria-labelledby="wave"
                      variants={waveAnimation}
                      animate="animate"
                      style={{ display: "inline-block" }}
                    >
                      👋🏻
                    </motion.span>
                  </motion.h1>

                  <motion.h1 variants={slideInLeft} className="heading-name">
                    I'M
                    <strong className="main-name"> Ritika Sah </strong>
                    <div>A Passionate and Motivated</div>
                  </motion.h1>

                  <motion.div variants={fadeInUp} style={{ padding: 40, textAlign: "left" }} className="type-container">
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
                  </motion.div>
                </Col>

                <Col md={5} style={{ paddingBottom: 20 }} className="home-image">
                  <motion.img
                    variants={slideInRight}
                    animate="animate"
                    whileHover={{ scale: 1.05 }}
                    src={girlcoder}
                    alt="home pic"
                    className="img-fluid"
                    style={{ maxHeight: "450px" }}
                    {...imageFloat}
                  />
                </Col>
              </Row>
            </motion.div>
          </Container>
        </Container>
        <Home2 />
        {/* <Contact/> */}
      </section>
    </>
  )
}

export default Home
