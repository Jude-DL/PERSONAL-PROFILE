import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section className="contact-page">
      <h2>Contact Me</h2>
      
      <div className="contact-info">
        <div className="contact-item">
          <h3>Email</h3>
          <p><a href="mailto:your.email@example.com">your.email@example.com</a></p>
        </div>
        
        <div className="contact-item">
          <h3>Social Media</h3>
          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {/* Add more social links as needed */}
          </div>
        </div>
      </div>
      
      {/* Optional: Add a contact form */}
      <div className="contact-form-container">
        <h3>Send Me a Message</h3>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;