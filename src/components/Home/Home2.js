"use client"
import { Container, Row, Col } from "react-bootstrap"
// import pic from "../../Assets/pic.png"
// import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"
import { AiFillGithub } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"

function Home2() {
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

  const leftVariants = {
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

  const rightVariants = {
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

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const socialVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const socialItemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  const textBoxStyle = {
    background: "linear-gradient(135deg, rgba(162, 70, 187, 0.1) 0%, rgba(70, 130, 180, 0.1) 100%)",
    border: "1px solid rgba(162, 70, 187, 0.3)",
    borderRadius: "15px",
    padding: "20px 25px",
    margin: "15px auto",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px rgba(162, 70, 187, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
    position: "relative",
    overflow: "hidden",
    maxWidth: "100%",
  }

  const headingBoxStyle = {
    background: "linear-gradient(135deg, rgba(162, 70, 187, 0.15) 0%, rgba(70, 130, 180, 0.15) 100%)",
    border: "2px solid rgba(162, 70, 187, 0.4)",
    borderRadius: "20px",
    padding: "25px 30px",
    margin: "20px auto",
    backdropFilter: "blur(15px)",
    boxShadow: "0 12px 40px rgba(162, 70, 187, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
    maxWidth: "100%",
  }

  const imageContainerStyle = {
    position: "relative",
    display: "inline-block",
    borderRadius: "50%",
    padding: "8px",
    background: "linear-gradient(45deg, #a246bb, #4682b4, #a246bb)",
    backgroundSize: "300% 300%",
    animation: "gradientShift 3s ease infinite",
    boxShadow: `
      0 0 20px rgba(162, 70, 187, 0.6),
      0 0 40px rgba(162, 70, 187, 0.4),
      0 0 60px rgba(162, 70, 187, 0.2),
      inset 0 0 20px rgba(255, 255, 255, 0.1)
    `,
  }

  return (
    <>
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .text-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s;
        }
        
        .text-box:hover::before {
          left: 100%;
        }

        @media (max-width: 768px) {
          .home-about-description {
            padding: 0 15px;
          }
          
          .text-box {
            margin: 10px auto;
            padding: 15px 20px;
          }
          
          .heading-box {
            padding: 20px 25px;
            margin: 15px auto;
          }
          
          .myAvtar img {
            max-width: 250px !important;
          }
        }

        @media (max-width: 576px) {
          .text-box {
            padding: 6px 18px;
            margin: 4px auto;
          }
          
          .heading-box {
            padding: 0 10px;
          }
          
          .myAvtar img {
            max-width: 200px !important;
          }
        }
      `}</style>

      <Container fluid className="home-about-section" id="about">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Row className="justify-content-center">
              <Col xs={12} md={8} className="home-about-description">
                <motion.div variants={headingVariants} style={headingBoxStyle} className="heading-box">
                  <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", margin: 0 }}>
                    LET ME <span className="purple"> INTRODUCE </span> MYSELF
                  </h1>
                </motion.div>

                <div className="home-about-body d-flex flex-column align-items-center">
                  <motion.div
                    variants={leftVariants}
                    style={textBoxStyle}
                    className="text-box"
                    whileHover={{ scale: 1.02, boxShadow: "0 12px 40px rgba(162, 70, 187, 0.2)" }}
                  >
                    <p style={{ margin: 0, textAlign: "center" }}>
                      ➣ I'm Ritika Sah,{" "}
                      <span className="purple">a software developer with 1.5 years of experience</span> crafting modern
                      web interfaces and interactive UI components using{" "}
                      <span className="purple">React.js, Tailwind CSS, and MERN stack.</span>
                    </p>
                  </motion.div>

                  <motion.div
                    variants={rightVariants}
                    style={textBoxStyle}
                    className="text-box"
                    whileHover={{ scale: 1.02, boxShadow: "0 12px 40px rgba(162, 70, 187, 0.2)" }}
                  >
                    <p style={{ margin: 0 }}>
                      ➣ From crafting sleek UIs with <span className="purple">React.js and Tailwind CSS</span> to diving
                      into the depths of <span className="purple">Node.js and MongoDB</span>, I thrive on turning
                      complex ideas into clean, functional solutions.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={leftVariants}
                    style={textBoxStyle}
                    className="text-box"
                    whileHover={{ scale: 1.02, boxShadow: "0 12px 40px rgba(162, 70, 187, 0.2)" }}
                  >
                    <p style={{ margin: 0 }}>
                      ➣ My field of interest is building new{" "}
                      <span className="purple">Web Technologies and Products</span> and also exploring{" "}
                      <span className="purple">Artificial Intelligence</span>.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={rightVariants}
                    style={textBoxStyle}
                    className="text-box"
                    whileHover={{ scale: 1.02, boxShadow: "0 12px 40px rgba(162, 70, 187, 0.2)" }}
                  >
                    <p style={{ margin: 0}}>
                      📌 Let's connect if you're looking for a software developer who's creative, collaborative, and
                      committed to growth!
                    </p>
                  </motion.div>
                </div>
              </Col>

              {/* <Col xs={12} md={4} className="myAvtar d-flex justify-content-center align-items-center mt-4 mt-md-0">
                <motion.div variants={imageVariants}>
                  <div style={imageContainerStyle}>
                    <Tilt>
                      <img
                        src={pic || "/placeholder.svg"}
                        className="img-fluid"
                        alt="avatar"
                        style={{
                          borderRadius: "50%",
                          maxWidth: "300px",
                          width: "100%",
                          height: "auto",
                          margin: "0 auto",
                          display: "block",
                          border: "3px solid rgba(255, 255, 255, 0.2)",
                        }}
                      />
                    </Tilt>
                  </div>
                </motion.div>
              </Col> */}
            </Row>

            <Row className="justify-content-center">
              <Col md={12} className="home-about-social">
                <div className="text-center py-4">
                  <motion.h1
                    variants={headingVariants}
                    style={{ marginBottom: "15px", fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
                  >
                    FIND ME ON
                  </motion.h1>
                  <motion.p variants={socialVariants} style={{ marginBottom: "25px" }}>
                    Feel free to <span className="purple">connect </span>with me
                  </motion.p>
                  <motion.ul
                    variants={socialVariants}
                    className="home-about-social-links d-flex justify-content-center gap-3 list-unstyled"
                  >
                    <motion.li
                      variants={socialItemVariants}
                      whileHover={{ scale: 1.15, y: -8 }}
                      whileTap={{ scale: 0.95 }}
                      className="social-icons"
                    >
                      <a
                        href="https://github.com/sahritika07"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons d-flex align-items-center justify-content-center"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(162, 70, 187, 0.2) 0%, rgba(70, 130, 180, 0.2) 100%)",
                          border: "1px solid rgba(162, 70, 187, 0.3)",
                          borderRadius: "12px",
                          padding: "12px",
                          boxShadow: "0 5px 15px rgba(162, 70, 187, 0.2)",
                          fontSize: "1.5rem",
                          width: "50px",
                          height: "50px",
                          textDecoration: "none",
                        }}
                      >
                        <AiFillGithub />
                      </a>
                    </motion.li>

                    <motion.li
                      variants={socialItemVariants}
                      whileHover={{ scale: 1.15, y: -8 }}
                      whileTap={{ scale: 0.95 }}
                      className="social-icons"
                    >
                      <a
                        href="https://www.linkedin.com/in/your-linkedin-username/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons d-flex align-items-center justify-content-center"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(162, 70, 187, 0.2) 0%, rgba(70, 130, 180, 0.2) 100%)",
                          border: "1px solid rgba(162, 70, 187, 0.3)",
                          borderRadius: "12px",
                          padding: "12px",
                          boxShadow: "0 5px 15px rgba(162, 70, 187, 0.2)",
                          fontSize: "1.5rem",
                          width: "50px",
                          height: "50px",
                          textDecoration: "none",
                        }}
                      >
                        <FaLinkedinIn />
                      </a>
                    </motion.li>
                  </motion.ul>
                </div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </Container>
    </>
  )
}

export default Home2
