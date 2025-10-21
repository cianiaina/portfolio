// src/components/Skills.jsx
import React from 'react';
import './Skills.css';

function Skills() {
  const techSkills = ["HTML", "CSS", "Vue.js", "JS", "REACT", "GIT", "NPM", "Node.js","PYTHON","PHP", "JAVA", "#C", "MYSQL"];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My skills</h2>
      <div className="skills-grid">
        {techSkills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;