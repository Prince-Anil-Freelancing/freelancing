import React from 'react';

const teamMembers = [
  {
    name: 'Alice Johnson',
    role: 'Lead Developer',
    experience: '5 years',
    description: 'Alice is a seasoned developer with a passion for creating dynamic and responsive web applications using React.js. She has led numerous successful projects and is known for her attention to detail and innovative solutions.'
  },
  {
    name: 'Bob Smith',
    role: 'Frontend Developer',
    experience: '3 years',
    description: 'Bob specializes in crafting beautiful and user-friendly interfaces. With a strong background in responsive CSS, he ensures that every project looks great on any device.'
  },
  {
    name: 'Charlie Brown',
    role: 'UI/UX Designer',
    experience: '4 years',
    description: 'Charlie is an expert in user experience design, focusing on creating intuitive and engaging interfaces. His designs are not only visually appealing but also highly functional.'
  }
];

const About = () => {
  return (
    <div className="about-us-section">
      <h1 className="title-heading">About Us</h1>
      <p className="about-description">
        We are a dedicated team of freelancers with a strong background in React.js and responsive CSS. Our mission is to deliver high-quality web applications that provide an exceptional user experience across all devices.
      </p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <h2 className="team-name">{member.name}</h2>
            <p className="team-role">{member.role}</p>
            <p className="team-experience">Experience: {member.experience}</p>
            <p className="team-description">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
