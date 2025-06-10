// src/components/CoursesPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import courses from "../data/coursesData";
import "./CoursesPage.css";

const CoursesPage = () => {
  const navigate = useNavigate();

  const goToCourse = (id) => {
    navigate(`/courses/${id}/register`);
  };

  return (
    <div className="courses-page">
      {/* ... same code as before */}
      {courses.map(course => (
        <div
          key={course.id}
          className="course-card"
          onClick={() => goToCourse(course.id)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && goToCourse(course.id)}
        >
          {/* course info */}
        </div>
      ))}
    </div>
  );
};

export default CoursesPage;
