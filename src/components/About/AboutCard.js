import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify"  }}>
            Hi Everyone, I am <span className="purple">Ritika Sah </span>
            from <span className="purple"> Ranchi,Jharkhand.</span> <br/>
            I am currently employed as a software developer at Aadrika Enterprises. </p>
            <br />
        
            <p style={{ textAlign: "justify"  }}>
           
            I have completed Graduation in Bachelor's of Computer Application from Ranchi University. I scored 86% in my Graduation . 
            <br />
            </p>
            <br />
            <p style={{ textAlign: "justify"  }}>
            Apart from coding, some other activities that I love to do!
            </p>
         
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Workout
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rioyikl</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
