import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section className="about-page">
      <h2>About Me</h2>
      
      <div className="about-content">
        <div className="personal-info">
          <h3>Personal Background</h3>
          <p>
            I'm [Your Name], a web developer based in [Your Location]. I have a passion for building 
            digital experiences that are both functional and beautiful.
          </p>
          <p>
            My journey in tech began when [your brief background story]. Since then, I've been 
            continuously learning and growing in this ever-evolving field.
          </p>
        </div>
        
        <div className="hobbies-interests">
          <h3>Hobbies & Interests</h3>
          <ul>
            <li>Web Development and Design</li>
            <li>Learning new technologies</li>
            <li>[Your Hobby 1]</li>
            <li>[Your Hobby 2]</li>
            <li>[Your Interest 1]</li>
          </ul>
        </div>
        
        <div className="skills">
          <h3>Skills</h3>
          <div className="skill-categories">
            <div className="skill-category">
              <h4>Frontend</h4>
              <ul>
                <li>HTML5 & CSS3</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>[Other frontend skills]</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h4>Tools & Others</h4>
              <ul>
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>[Other tools]</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;