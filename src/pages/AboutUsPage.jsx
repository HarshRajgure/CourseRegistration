import React from "react";

const AboutUs = () => {
  return (
    <section style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.text}>
        We provide excellent online and offline courses for you.
        Our mission is to make education accessible and help you succeed in your career.
      </p>
    </section>
  );
};

const styles = {
  container: {
    padding: "40px",
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: "1.6",
    color: "#333",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "20px",
    color: "#2c3e50",
  },
  text: {
    fontSize: "18px",
  },
};

export default AboutUs;
