import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <p className="about-description">
        Hi! I'm <strong>Francia Andriambeloniaina</strong>, a passionate <strong>web developer</strong> 
        and computer science student at <strong>EMIT University</strong> in Fianarantsoa, Madagascar. 
        I enjoy building clean, functional, and user-friendly applications using technologies like 
        <strong> Vue.js, PHP/MySQL</strong>, and <strong>Java</strong>.
      </p>
      <p className="about-description">
        I love learning new technologies and transforming creative ideas into real projects. 
        I’ve already developed a <strong>piece management system</strong> in PHP and 
        a <strong>task management app</strong> in Java. 
      </p>
      <p className="about-description">
        I’m also deeply interested in <strong>artificial intelligence</strong> and plan to explore 
        how it can make software smarter and more helpful for people.
      </p>
      <p className="about-description">
        My goal is to grow as a <strong>full-stack developer</strong> and contribute to 
        innovative and meaningful digital projects .
      </p>
    </section>
  );
}

export default About;
