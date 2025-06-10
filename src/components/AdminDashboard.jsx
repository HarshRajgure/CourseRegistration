import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;
    if (!user || user.email !== "admin@example.com") {
      navigate("/"); // not admin, redirect
    }
  }, []);

  return (
    <div className="dashboard">
      <h1>Welcome Admin</h1>
      <div className="dashboard-links">
        <button onClick={() => navigate("/student-list")}>View Student List</button>
        <button onClick={() => alert("User List yet to be implemented")}>View User List</button>
      </div>
    </div>
  );
}

export default AdminDashboard;
