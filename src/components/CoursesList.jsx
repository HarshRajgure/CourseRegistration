// src/components/CoursesList.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import courses from "../data/coursesData";

const CoursesList = () => {
  const navigate = useNavigate();

  const handleRegisterClick = (courseId) => {
    // ✅ Correct path as per App.js
    navigate(`/courses/${courseId}/register`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Available Courses</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {courses.map((course) => (
          <div
            key={course.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              width: "300px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={course.image}
              alt={course.title}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p><strong>Fees:</strong> {course.fees}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <ul>
              {course.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
            <button onClick={() => handleRegisterClick(course.id)}>
              Register Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
