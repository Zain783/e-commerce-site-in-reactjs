import React from 'react';
import './Contact.css'; // Import the CSS file for styling

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>
          We would love to hear from you! Feel free to reach out to us using the contact information below.
        </p>
        <div className="contact-details">
          <div className="contact-item">
            <span className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <span className="contact-text">
              123 Main Street, City, Country
            </span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">
              <i className="fas fa-phone"></i>
            </span>
            <span className="contact-text">
              +1 123 456 7890
            </span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="contact-text">
              info@example.com
            </span>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <h2>Send us a message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
