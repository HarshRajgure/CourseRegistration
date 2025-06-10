// src/components/Dashboard.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Example: Clear user session from localStorage or context
    localStorage.removeItem("userToken"); // जर token वापरत असाल तर
    // किंवा जे user data तू ठेवला आहेस ते clear कर
    navigate("/login"); // Logout नंतर login page ला redirect करा
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome to Student Dashboard</h2>
      <ul className="dashboard-links">
        <li><Link to="/courses">Available Courses</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        
        <li>
          {/* Logout is a button because it triggers an action */}
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;
