import React from "react";
import { Link } from "react-router-dom";
import "../styles/Taskbar.css";  // Assuming you will create a separate CSS file for styling

const Taskbar = () => {
  return (
    <div className="taskbar">
      <div className="taskbar-logo">
        <h1>Elysium</h1> {/* You can replace this with a logo or other title */}
      </div>
      <div className="taskbar-links">
        <Link to="/" className="taskbar-link">Home</Link>
        <Link to="/login" className="taskbar-link">Login</Link>
        <Link to="/register" className="taskbar-link">Register</Link>
        {/* You can add more links to other sections of your app */}
      </div>
    </div>
  );
};

export default Taskbar;
