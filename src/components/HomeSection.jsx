import React from "react";
import "./HomeSection.css";

const HomeSection = () => {
  return (
    <section className="home-section">
      <div className="home-content">
        <h1>Empowering Students with Knowledge</h1>
        <p>
          Join our platform to learn Java, Spring Boot, and Full Stack Development with real-time projects and expert mentorship.
        </p>
        <a href="/courses" className="cta-button">Explore Courses</a>
      </div>

      <div className="home-image">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80" 
          alt="Learning Illustration" 
        />
      </div>
    </section>
  );
};

export default HomeSection;
