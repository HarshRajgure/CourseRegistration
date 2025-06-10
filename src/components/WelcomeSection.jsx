// src/components/WelcomeSection.jsx

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Welcome.css";

const WelcomeSection = () => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-heading">Welcome to Our Course Platform 🎓</h1>
      <p className="welcome-description">
        Learn, grow, and level up your skills with our top-notch development and programming
        courses. Get real-world experience, hands-on projects, and support from expert mentors.
      </p>

      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook className="icon fb" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter className="icon tw" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram className="icon ig" />
        </a>
      </div>
    </div>
  );
};

export default WelcomeSection;
