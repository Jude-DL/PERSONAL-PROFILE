import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project 1 Title",
      description: "A detailed description of your first project. Explain what it does, the problem it solves, and your role in its development.",
      technologies: ["React", "CSS", "JavaScript", "Other technologies used"],
      github: "https://github.com/yourusername/project1",
      demo: "https://project1-demo-link.com" // Optional
    },
    {
      id: 2,
      title: "Project 2 Title",
      description: "A detailed description of your second project. Make sure to highlight the challenges you faced and how you overcame them.",
      technologies: ["HTML", "CSS", "JavaScript", "Other technologies used"],
      github: "https://github.com/yourusername/project2",
      demo: "https://project2-demo-link.com" // Optional
    }
    // You can add more projects as needed
  ];

  return (
    <section className="projects-page">
      <h2>My Projects</h2>
      
      <div className="projects-container">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="technologies">
              <h4>Technologies Used:</h4>
              <ul>
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;