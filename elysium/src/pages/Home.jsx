import React, { useState, useEffect } from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="title">Welcome to Elysium</h1>
        <p className="subtitle">Local delivery made simple and reliable.</p>
        <div className="button-group">
          <button className="btn primary">Get Started</button>
          <button className="btn secondary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
