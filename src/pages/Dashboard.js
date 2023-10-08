import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Protected Route Component
const Dashboard = () => {
    const [userEmail, setUserEmail] = useState(null);
  // Check if the user is authenticated (e.g., by verifying the token)
  const isAuthenticated = sessionStorage.getItem("token") !== null;

  // Get the navigation function from the hook
  const navigate = useNavigate();

  useEffect(() => {
    // Use the navigate function inside the useEffect hook
    if (!isAuthenticated) {
      navigate("/login");
    }
    else {
        const email = sessionStorage.getItem("userEmail");
        if (email) {
          setUserEmail(email);
        }
    }
  }, [isAuthenticated, navigate]); // Add navigate as a dependency

  // If not authenticated, return null to avoid rendering anything
  if (!isAuthenticated) {
    return null;
  }

  // If authenticated, render the protected content
  return (
    <div>
      <h2>Dashboard</h2>
      {/* Add your dashboard content here */}
      {userEmail && <p>Hello, {userEmail}!</p>}
    </div>
  );
};

export default Dashboard;
