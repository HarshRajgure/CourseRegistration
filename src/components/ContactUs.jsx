// src/components/ContactUs.jsx
import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-info">
          <h2>Contact SkillMandir</h2>
          <p>Your Temple of Skills – Learn Anywhere, Anytime!</p>

          <div className="info-box">
            <FaMapMarkerAlt className="icon" />
            <span>SkillMandir Virtual Campus – 100% Online Learning Hub</span>
          </div>

          <div className="info-box">
            <FaEnvelope className="icon" />
            <span>support@skillmandir.com</span>
          </div>

          <div className="info-box">
            <FaPhone className="icon" />
            <span>+91-98765-43210 (Mon-Fri 10am-6pm)</span>
          </div>
        </div>

        <form className="contact-form">
          <h3>Send Us a Message</h3>
          <label>Name</label>
          <input type="text" placeholder="Your name" required />

          <label>Email</label>
          <input type="email" placeholder="you@example.com" required />

          <label>Message</label>
          <textarea rows="4" placeholder="Write your message..." required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
