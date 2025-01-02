import React from 'react';
import Certificate from './Certificate';
import { FaLinkedin,FaGithub} from "react-icons/fa";

const teamMembers = [
  {
    name: 'Prince Dhola',
    description: 'Prince specializes in crafting beautiful and user-friendly interfaces. With a strong background in responsive CSS, he ensures that every project looks great on any device.',
    github:'https://github.com/DholaPrince',
    linkdin:'https://www.linkedin.com/in/prince-dhola-6a65092b2/?originalSubdomain=in'
  },
  {
    name: 'Anil Kantariya',
    description: 'Anil is a seasoned developer with a passion for creating dynamic and responsive web applications using React.js. He has led numerous successful projects and is known for his attention to detail and innovative solutions.',
    github:'https://github.com/Anilqrr',
    linkdin:'https://www.linkedin.com/in/anil-kantariya-5a4277244/?originalSubdomain=in'
  },
  
];

const About = () => {
  return (
    <>
    <div className="about-us-section" id="about">
      <h1 className="title-heading">About Us</h1>
      <p className="about-description">
        We are a dedicated team of freelancers with a strong background in React.js and responsive CSS. Our mission is to deliver high-quality web applications that provide an exceptional user experience across all devices.
      </p>
      <Certificate/> <br /><br />
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <h2 className="team-name">{member.name}</h2>
            <p className="team-role">{member.role}</p>
            <p className="team-experience">{member.experience}</p>
            <p className="team-description">{member.description}</p> <br />
           <a href={member.github} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}><FaGithub style={{fontSize:"2rem",color:"black"}}/></a>
           <a href={member.linkdin}  target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}> <FaLinkedin style={{fontSize:"2rem",color:"black"}}/> </a>
          </div>
        ))}
      </div>
    </div>
    <br/>
    </>
  );
};

export default About;
