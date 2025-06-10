// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import RegistrationForm from "./components/RegistrationForm";
import Dashboard from "./components/Dashboard";
import StudentList from "./components/StudentList";
import Profile from "./components/Profile";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import ThankYou from "./pages/ThankYouPage";
import CoursesList from "./components/CoursesList";
import CourseRegistrationForm from "./components/CourseRegistrationForm";

function App() {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  return (
    <Router>
      <Navbar isAdminAuthenticated={isAdminAuthenticated} />
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/courses" element={<CoursesList />} />
        <Route path="/courses/:id/register" element={<CourseRegistrationForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/thank-you" element={<ThankYou />} />

        {/* Login Page */}
        <Route
          path="/login"
          element={<Login onLogin={() => setIsAdminAuthenticated(true)} />}
        />

        {/* Admin Protected Routes */}
        <Route
          path="/dashboard"
          element={
            isAdminAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/student-list"
          element={
            isAdminAuthenticated ? <StudentList /> : <Navigate to="/login" replace />
          }
        />

        {/* Fallback */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
