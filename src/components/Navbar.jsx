import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({ isAdminLoggedIn }) {
  const [authDropdown, setAuthDropdown] = useState(false);
  const toggleAuthDropdown = () => setAuthDropdown(!authDropdown);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/" className="logo">MyCourseApp</NavLink>
      </div>

      <ul className="navbar-links">
        <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
        <li><NavLink to="/courses" activeclassname="active">Courses</NavLink></li>
        <li><NavLink to="/contact" activeclassname="active">Contact Us</NavLink></li>

        {!isAdminLoggedIn && (
          <li className="auth-dropdown" onClick={toggleAuthDropdown}>
            <span className="auth-link">
              Login / Register <i className={`arrow ${authDropdown ? "up" : "down"}`}></i>
            </span>
            {authDropdown && (
              <ul className="dropdown-menu">
                <li><NavLink to="/login" activeclassname="active">Login</NavLink></li>
                <li><NavLink to="/register" activeclassname="active">Register</NavLink></li>
              </ul>
            )}
          </li>
        )}

        {isAdminLoggedIn && (
          <>
            <li><NavLink to="/dashboard" activeclassname="active">Dashboard</NavLink></li>
            <li><NavLink to="/student-list" activeclassname="active">Student List</NavLink></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
