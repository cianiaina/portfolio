import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Zombie Hunter Game',
      description:
        "A shooting game developed in Python with Pygame, where the player faces waves of zombies. The project focuses on logic, collision handling, and entity management.",
      tech: 'Python / Pygame',
      link: 'https://github.com/cianiaina/chasseurdezombie',
    },
    {
      title: 'To-Do List in Java',
      description:
        "Java application with a graphical interface (Swing) allowing users to add, edit, and delete tasks. A simple and intuitive interface for daily task management.",
      tech: 'Java / Swing',
      link: 'https://github.com/cianiaina/todo-app',
    },
    {
      title: 'Parts Management (C#)',
      description:
        "Desktop application in C# to manage parts, clients, and purchases. Complete system with forms, search functionality, and local data management.",
      tech: 'C# / WinForms',
      link: 'https://github.com/cianiaina/Gestion-Pieces',
    },
    {
      title: 'Employee Housing Management (Web App)',
      description:
        "Modern web application for managing employee housing at Fanalamanga SA, with a frontend built in Vue.js and a PHP backend connected to a MySQL database. Responsive and intuitive interface.",
      tech: 'Vue.js / PHP / MySQL',
      link: 'https://github.com/cianiaina/projetgestionlogement',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-tech">{project.tech}</p>
            <a
              href={project.link}
              className="project-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
