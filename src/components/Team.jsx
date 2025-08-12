import React from 'react';
import '../styles/team.css';
import team1 from '../images/Team/team1.png.webp';
import team2 from '../images/Team/team2.png.webp';
import team3 from '../images/Team/team3.png.webp';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Ethan Welch",
      position: "CEO & Founder",
      image: team1
    },
    {
      id: 2,
      name: "Michael Johnson",
      position: "Project Manager",
      image: team2
    },
    {
      id: 3,
      name: "David Smith",
      position: "Lead Architect",
      image: team3
    }
  ];

  return (
    <section className="section team-section">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Our Team</p>
          <h2 className="section-title">OUR TEAM</h2>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-position">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 