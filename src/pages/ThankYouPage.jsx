import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ThankYouPage.css";

function ThankYouPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="thank-you-container">
      <div className="thank-you-card animate">
        <h1 className="gradient-text">🎉 Thank You!</h1>
        <p>
          You have successfully registered for <strong>{state?.courseName}</strong>.
        </p>
        <p>We’re excited to have you on board 🚀</p>
        <button onClick={() => navigate("/courses")}>Explore More Courses</button>
      </div>
    </div>
  );
}

export default ThankYouPage;
