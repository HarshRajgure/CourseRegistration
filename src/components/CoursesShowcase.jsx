import React from "react";

const courses = [
  { id: 1, name: "Fundamentals of Programming", duration: "3 months" },
  { id: 2, name: "Web Design", duration: "2 months" },
  { id: 3, name: "Digital Marketing", duration: "1.5 months" },
];

const CoursesShowcase = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Our Courses</h2>
      <ul style={styles.list}>
        {courses.map(({ id, name, duration }) => (
          <li key={id} style={styles.item}>
            <strong>{name}</strong> - Duration: {duration}
          </li>
        ))}
      </ul>
    </section>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#e9f0f7",
    margin: "20px 0",
    borderRadius: "8px",
  },
  heading: { fontSize: "28px", marginBottom: "15px", color: "#2c3e50" },
  list: { listStyleType: "none", padding: 0, margin: 0 },
  item: { fontSize: "18px", marginBottom: "10px", color: "#34495e" },
};

export default CoursesShowcase;
