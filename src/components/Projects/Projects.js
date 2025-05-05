import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";
import expense from '../../Assets/Projects/Exoense-Tracker.png'
import mern from '../../Assets/Projects/Mern-Auth.png'
import spotify from '../../Assets/Projects/spotify-clone.png'
import gemini from '../../Assets/Projects/gemini-clone.png'
import happymeals from '../../Assets/Projects/Happy-meals.png'
import realestate from '../../Assets/Projects/Real-esatate.png'



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense-Tracker"
              description="My Expense Tracker allows users to record, manage, and monitor their income and expenses in real-time. It features secure user authentication, intuitive dashboards, and visual insights like charts for better financial tracking. The app uses MongoDB for data storage, Express.js and Node.js for backend APIs, and React for a responsive frontend interface."
              ghLink="https://github.com/sahritika07/Expense-Tracker-MERN-App"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mern}
              isBlog={false}
              title="Mern-Auth"
              description="My Authentication App enables user registration, login, and password change functionalities. It includes OTP-based email verification to ensure valid user identity during sign-up and sensitive actions. The backend handles secure authentication using JWT and bcrypt, while the frontend offers a smooth, user-friendly experience with React.."
              ghLink="https://github.com/sahritika07/MERN-Auth"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="Spotify-Clone"
              description="My Spotify Clone is a music streaming web application that replicates core Spotify features using the MERN stack. It allows users to browse, play, and manage songs and playlists with a sleek, responsive UI. The app includes user authentication, real-time audio playback, and dynamic content rendering for a seamless experience."
              ghLink="https://github.com/sahritika07/SpotifyCloneReact"
              demoLink="https://spotify-clone-ritika.netlify.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gemini}
              isBlog={false}
              title="Gemini-Clone"
              description="My Gemini Clone is a React-based AI chatbot interface inspired by Google’s Gemini. It allows users to input queries and receive smart, context-aware responses in a conversational format. The app features a modern UI, handles API calls for real-time responses, and offers a user-friendly experience similar to popular AI chat tools."
              ghLink="https://github.com/sahritika07/Gemini-Ai"
              demoLink="https://ritika-gemini-ai.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={happymeals}
              isBlog={false}
              title="Happy-Meals"
              description="My Food Delivery Website is a React-based application that allows users to browse restaurants, explore menus, and place food orders online. It features a clean, responsive UI with smooth navigation, cart functionality, and real-time updates. The app provides an engaging user experience with dynamic content rendering and seamless order management."
              ghLink="https://github.com/sahritika07/Food-Delivery-Website-HaapyMeals"
              demoLink=" https://food-delivery-app-happymeals.netlify.app" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realestate}
              isBlog={false}
              title="Real-Estate"
              description="My Real Estate App is a modern, responsive web application built with React that showcases property listings with smooth navigation and an intuitive UI. It allows users to explore, filter, and view property details dynamically. Framer Motion is used to enhance user experience with sleek animations and interactive transitions throughout the app."
              ghLink="https://github.com/sahritika07/Real-Estate-Project-Reactjs"
              demoLink="/"    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
