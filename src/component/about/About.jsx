import React from "react";
import "./about.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const team = [
  {
    name: "Zjbkbgig",
    track: "Frontend Developer",
    img: "/images/zena.jpg",
    github: "https://github.com/zena",
    linkedin: "https://linkedin.com/in/zena"
  },
  {
    name: "Ajbkbkb",
    track: "Backend Developer",
    img: "/images/ahmed.jpg",
    github: "https://github.com/ahmed",
    linkedin: "https://linkedin.com/in/ahmed"
  },
  {
    name: "Sajvkbki",
    track: "UI/UX Designer",
    img: "/images/sara.jpg",
    github: "https://github.com/sara",
    linkedin: "https://linkedin.com/in/sara"
  },
  {
    name: "Omkhlhl",
    track: "Fullstack Developer",
    img: "/images/omar.jpg",
    github: "https://github.com/omar",
    linkedin: "https://linkedin.com/in/omar"
  },
  {
    name: "Mkbknk",
    track: "Mobile Developer",
    img: "/images/mona.jpg",
    github: "https://github.com/mona",
    linkedin: "https://linkedin.com/in/mona"
  },
  {
    name: "Yihkhn",
    track: "Data Scientist",
    img: "/images/youssef.jpg",
    github: "https://github.com/youssef",
    linkedin: "https://linkedin.com/in/youssef"
  },
  {
    name: "Laila Hassan",
    track: "Tester / QA",
    img: "/images/laila.jpg",
    github: "https://github.com/laila",
    linkedin: "https://linkedin.com/in/laila"
  }
];

const About = () => {
  return (
    <div className="about">
      <h2>Meet Our Team </h2>
      <div className="team-container">
        {team.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.track}</p>
            <div className="social-links">
              <a href={member.github} target="_blank" rel="noreferrer" className="icon">
                <FaGithub />
              </a>
              <a href={member.linkedin} target="_blank" rel="noreferrer" className="icon">
                <FaLinkedin />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
