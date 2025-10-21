// src/components/Contact.jsx
import React from 'react';
import './Contact.css';
// You might want to install react-icons for better icons: npm install react-icons
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons

function Contact() {
  return (
    <section id="contact" className="contact-section"> {/* Changed id from 'contacts' to 'contact' */}
      <h2 className="section-title">Get In Touch</h2> {/* Translated title */}
      <div className="contact-cards-grid">

        <div className="contact-card">
          <FaEnvelope className="contact-icon" /> {/* Email icon */}
          <h3 className="card-title">Email</h3>
          <a href="mailto:andriambeloniainaf@gmail.com">andriambeloniainaf@gmail.com</a>
        </div>

        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" /> {/* Phone icon */}
          <h3 className="card-title">Phone</h3> {/* Translated title */}
          <a href="tel:+261342465195">+261 34 24 651 95</a> {/* Formatted phone number with country code */}
        </div>

        <div className="contact-card">
          <h3 className="card-title">Social Media</h3> {/* Translated title */}
          <div className="social-links">
            <a href="https://github.com/cianiaina" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/francia-andriambeloniaina/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" /> LinkedIn
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;