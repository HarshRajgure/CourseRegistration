import React from 'react';
import './CourcesSection.css';

const courses = [
  {
    title: "Full Stack Web Development",
    description: "HTML, CSS, JavaScript, React, Node.js, MongoDB",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Core Java",
    description: "Object-Oriented Programming, Collections, Exception Handling",
    image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Advanced Java (Spring Boot)",
    description: "Spring MVC, Spring Boot, JPA, REST APIs",
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Python Programming",
    description: "Basics to Advanced, OOP, File Handling, Libraries",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Data Structures & Algorithms",
    description: "Arrays, LinkedList, Trees, Sorting, Searching",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80",
  },
];

const CoursesSection = () => {
  return (
    <section className="courses-section">
      <h2 className="section-heading">Our Courses</h2>
      <div className="card-container">
        {courses.map((course, index) => (
          <div key={index} className="course-card" style={{ animationDelay: `${index * 0.3}s` }}>
            <div className="image-wrapper">
              <img src={course.image} alt={course.title} />
            </div>
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
