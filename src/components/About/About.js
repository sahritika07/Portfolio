"use client"
import { Container } from "react-bootstrap"
import { motion } from "framer-motion"
import Particle from "../Particle"
import Github from "./Github"
import Techstack from "./Techstack"
import Aboutcard from "./AboutCard"
// import laptopImg from "../../Assets/about.png";
import myimg from "../../Assets/pic.png"
// import Toolstack from "./Toolstack";

function About() {
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

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
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
        duration: 1,
        ease: "easeOut",
      },
    },
  }

  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <>
      <style jsx>{`
        .about-section {
          min-height: 100vh;
          width: 100%;
          padding: 2rem 0;
          position: relative;
          display: flex;
          flex-direction: column;
          z-index: 1;
        }

        .interactive-container {
          min-height: 100vh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          background: inherit;
        }

        .centered-image-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 15;
          pointer-events: none;
        }

        .animated-border-box {
          position: relative;
          padding: 15px;
          border-radius: 25px;
          background: linear-gradient(45deg, #1a1a2e, #16213e, #0f3460);
          overflow: hidden;
          width: 320px;
          height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .animated-border-box::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, 
            #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3, #54a0ff, #5f27cd);
          background-size: 400% 400%;
          border-radius: 25px;
          z-index: -1;
          animation: gradientShift 4s ease infinite;
        }

        .animated-border-box::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, #1a1a2e, #16213e, #0f3460);
          border-radius: 23px;
          z-index: -1;
        }

        .image-glow {
          border-radius: 20px;
          box-shadow: 
            0 0 30px rgba(255, 107, 107, 0.3),
            0 0 60px rgba(78, 205, 196, 0.2),
            0 0 90px rgba(69, 183, 209, 0.1);
          transition: all 0.3s ease;
          width: 280px;
          height: 280px;
          object-fit: cover;
        }

        .image-glow:hover {
          transform: scale(1.05);
          box-shadow: 
            0 0 40px rgba(255, 107, 107, 0.5),
            0 0 80px rgba(78, 205, 196, 0.3),
            0 0 120px rgba(69, 183, 209, 0.2);
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .project-heading {
          text-align: center;
          margin: 3rem 0 2rem 0;
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          position: relative;
          z-index: 5;
        }

        .content-section {
          position: relative;
          z-index: 5;
          width: 100%;
          background: inherit;
          padding: 2rem 0;
        }

        /* Responsive styles */
        @media (max-width: 768px) {
          .about-section {
            padding: 1rem 0;
          }

          .animated-border-box {
            width: 260px;
            height: 260px;
            padding: 12px;
          }

          .image-glow {
            width: 220px;
            height: 220px;
          }

          .project-heading {
            font-size: clamp(1.5rem, 5vw, 2rem);
            margin: 2rem 0 1.5rem 0;
          }
        }

        @media (max-width: 576px) {
          .animated-border-box {
            width: 220px;
            height: 220px;
            padding: 10px;
          }

          .image-glow {
            width: 180px;
            height: 180px;
          }

          .project-heading {
            font-size: clamp(1.3rem, 6vw, 1.8rem);
            margin: 1.5rem 0 1rem 0;
          }
        }
      `}</style>

      <Container fluid className="about-section">
        <Particle />

        {/* Interactive Container - Contains everything to prevent overlap */}
        <div className="interactive-container">
          {/* Centered Square Image */}
          <div className="centered-image-container">
            <motion.div variants={imageVariants} {...floatingAnimation} className="animated-border-box">
              <img src={myimg || "/placeholder.svg"} alt="about" className="img-fluid image-glow" />
            </motion.div>
          </div>

          {/* Floating Cards */}
          <Aboutcard />
        </div>

        {/* Content Section */}
        <div className="content-section">
          <Container>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h1 variants={headingVariants} className="project-heading">
                Professional <strong className="purple">Skillset </strong>
              </motion.h1>

              <Techstack />

              <Github />
            </motion.div>
          </Container>
        </div>
      </Container>
    </>
  )
}

export default About
