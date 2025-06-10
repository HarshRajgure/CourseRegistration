// src/components/WhyChooseSection.js
import React from "react";
import "./WhyChooseSection.css";

const WhyChooseSection = () => {
  return (
    <section className="why-choose-section">
      <h2>Why Choose Us?</h2>
      <div className="features-container">
        <div className="feature-card">
          <i className="fas fa-chalkboard-teacher feature-icon"></i>
          <h3>Expert Mentors</h3>
          <p>Learn from industry professionals with years of experience.</p>
        </div>

        <div className="feature-card">
          <i className="fas fa-laptop-code feature-icon"></i>
          <h3>Hands-on Projects</h3>
          <p>Work on real-time projects to build your portfolio.</p>
        </div>

        <div className="feature-card">
          <i className="fas fa-clock feature-icon"></i>
          <h3>Flexible Learning</h3>
          <p>Learn at your own pace with lifetime access to courses.</p>
        </div>

        <div className="feature-card">
          <i className="fas fa-certificate feature-icon"></i>
          <h3>Certification</h3>
          <p>Get recognized certificates after course completion.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
