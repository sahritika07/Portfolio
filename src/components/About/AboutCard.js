import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify"  }}>
            ➢ Hi Everyone, I am <span className="purple">Ritika Sah </span>
            from <span className="purple"> Ranchi,Jharkhand.</span> I am currently employed as a software developer at O2N Enterprises.  <br/>
           </p>
            <br />
        
            <p style={{ textAlign: "justify"  }}>
           
           ➢ Armed with a Bachelor's in Computer Application (86%) and a curiosity that never sleeps, I blend logic with creativity to build digital experiences that not only work—but wow.
            <br />
            </p>
            <br />
             <p style={{ textAlign: "justify"  }}>
           ➢  I am fluent in classics like Javascript, React js, Next js, Node js, Express js, MongoDB and Postgres sql
            </p>
            <br/>
            <p style={{ textAlign: "justify"  }}>
           ➢  Apart from coding, some other activities that I love to do!
            </p>
         
          <ul>
            <li className="about-activity">
              • Playing Sports
            </li>
            <li className="about-activity">
              • Dancing
            </li>
            <li className="about-activity">
              • Workout
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
