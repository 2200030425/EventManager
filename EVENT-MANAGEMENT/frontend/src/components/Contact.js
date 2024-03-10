import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  const headingStyle = { color: '#009688', marginBottom: '10px' };
  const contactInfoStyle = { fontSize: '1.2rem', fontWeight: 'bold', marginTop: '5px' };
  const iconStyle = { marginRight: '5px' };

  return (
    <div>
      <h1 style={headingStyle}><strong>Contact Us</strong></h1>
      <p>
        Have questions, suggestions, or just want to say hello? We'd love to hear from you!
      </p>
      <h2 style={headingStyle}>Get in Touch:</h2>
      <p style={contactInfoStyle}>Email: eventmanagement@gmail.com</p>
      <p style={contactInfoStyle}>Phone: +91 1234567894</p>

      <h2 style={headingStyle}>Visit Us:</h2>
      <p style={contactInfoStyle}>123 Event Street</p>
      <p style={contactInfoStyle}>Hyderabad, Telangana, India</p>

      <h2 style={headingStyle}>Connect With Us:</h2>
      <p style={contactInfoStyle}>Follow us on social media for updates and announcements:</p>
      <ul style={contactInfoStyle}>
        <li>
          <FaFacebook style={iconStyle} />
          <a href="https://www.facebook.com/YourEventSystem" target="_blank" rel="noopener noreferrer">YourEventSystem</a>
        </li>
        <li>
          <FaTwitter style={iconStyle} />
          <a href="https://twitter.com/YourEventSystem" target="_blank" rel="noopener noreferrer">@YourEventSystem</a>
        </li>
        <li>
          <FaInstagram style={iconStyle} />
          <a href="https://www.instagram.com/YourEventSystem" target="_blank" rel="noopener noreferrer">@YourEventSystem</a>
        </li>
      </ul>
    </div>
  );
};

export default ContactUs;
