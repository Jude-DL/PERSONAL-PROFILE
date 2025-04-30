import React from 'react';
import '../styles/Education.css';

function Education() {
  return (
    <section className="education-page">
      <h2>Education</h2>
      
      <div className="education-timeline">
        <div className="education-item">
          <h3>[University/College Name]</h3>
          <p className="degree">[Your Degree] - [Graduation Year]</p>
          <p className="location">[Location]</p>
          <p className="description">
            Studied [your major] with focus on [specific areas]. 
            [Add any relevant achievements or activities]
          </p>
        </div>
        
        <div className="education-item">
          <h3>[High School Name]</h3>
          <p className="degree">High School Diploma - [Graduation Year]</p>
          <p className="location">[Location]</p>
          <p className="description">
            [Add any relevant achievements or activities]
          </p>
        </div>
      </div>
      
      <div className="courses-section">
        <h3>Relevant Courses</h3>
        <ul className="courses-list">
          <li>[Course 1] - [Platform/Institution]</li>
          <li>[Course 2] - [Platform/Institution]</li>
          <li>[Course 3] - [Platform/Institution]</li>
          <li>[Course 4] - [Platform/Institution]</li>
        </ul>
      </div>
    </section>
  );
}

export default Education;
