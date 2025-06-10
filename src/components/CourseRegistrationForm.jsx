// src/components/CourseRegistrationForm.jsx
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import courses from "../data/coursesData";
import "./CourseRegistrationForm.css";

// ✅ Realtime Database import
import { database } from "../firebase";
import { ref, push } from "firebase/database";

function CourseRegistrationForm() {
  const { id } = useParams();
  const course = courses.find((c) => c.id.toString() === id);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    qualification: "",
    city: "",
    reason: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      to_email: formData.email,
      to_name: formData.name,
      message: `Thank you for registering for the ${course.title} course. We will contact you shortly.`,
      qualification: formData.qualification,
      mobile: formData.mobile,
      city: formData.city,
      reason: formData.reason,
    };

    try {
      // ✅ Save to Realtime Database
      await push(ref(database, "students"), {
        ...formData,
        courseId: course.id,
        courseTitle: course.title,
        timestamp: new Date().toISOString(),
      });

      // ✅ Send email
      await emailjs.send(
        "service_7pgyaon",
        "template_kgib2ec",
        templateParams,
        "fuokCsGQPiMU8vv4I"
      );

      // ✅ Redirect
      navigate("/thank-you", { state: { courseName: course.title } });
    } catch (err) {
      alert("Error during submission. Please try again.");
      console.error(err);
    }
  };

  if (!course) return <h2>Course not found</h2>;

  return (
    <div className="course-form-container">
      <h2>Register for {course.title}</h2>
      <form className="course-form" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          required
          onChange={handleChange}
        />

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          onChange={handleChange}
        />

        <label>Mobile Number</label>
        <input
          type="tel"
          name="mobile"
          placeholder="Enter 10-digit mobile number"
          pattern="[0-9]{10}"
          required
          onChange={handleChange}
        />

        <label>Qualification</label>
        <input
          type="text"
          name="qualification"
          placeholder="e.g. BCA, BSc, BE"
          required
          onChange={handleChange}
        />

        <label>City</label>
        <input
          type="text"
          name="city"
          placeholder="Enter your city"
          required
          onChange={handleChange}
        />

        <label>Why do you want to join? (Optional)</label>
        <textarea
          name="reason"
          placeholder="Tell us your reason..."
          rows="3"
          onChange={handleChange}
        />

        <button type="submit">Submit Registration</button>
      </form>
    </div>
  );
}

export default CourseRegistrationForm;
