import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "15px",
      margin: "10px",
      width: "300px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    }}>
      <img
        src={course.image}
        alt={course.title}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "8px"
        }}
      />
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Fees:</strong> {course.fees}</p>
      <ul>
        {course.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseCard;
