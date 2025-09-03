import React from "react";
import "./about.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { IoShieldCheckmark } from "react-icons/io5";

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

  <section className="our-story">
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a wide
            range of tailored marketing, data and service solutions, Exclusive has
            10,500 sellers and 300 brands and serves 3 million customers across
            the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a very
            fast pace. Exclusive offers a diverse assortment in categories ranging
            from consumer goods to lifestyle products.
          </p>
        </div>
        <div className="story-image">
          <img src="/public/Shopping bag concept illustration _ Free Vector.jpg" alt="Our Story" />
        </div>
      </section>


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

<section className="features">
      <div className="feature-card">
        <div className="icon">
          {/* <i className="bi bi-truck"></i> */}
          <TbTruckDelivery />
        </div>
        <h3>FREE AND FAST DELIVERY</h3>
        <p>Free delivery for all orders over $140</p>
      </div>

      <div className="feature-card">
        <div className="icon">
          {/* <i className="bi bi-headset"></i> */}
          <RiCustomerServiceLine />
        </div>
        <h3>24/7 CUSTOMER SERVICE</h3>
        <p>Friendly 24/7 customer support</p>
      </div>
         
      <div className="feature-card">
        <div className="icon"> 
          <IoShieldCheckmark />
          {/* <i className="bi bi-shield-check"></i> */}
        </div>
        <h3>MONEY BACK GUARANTEE</h3>
        <p>We return money within 30 days</p>
      </div>
    </section>

    </div>
  );
};

export default About;
