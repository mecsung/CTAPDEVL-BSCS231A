// src/pages/Home.js
import React from "react";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to CTAPDEVL</h1>
        <p>Explore our awesome React app with modern UI and routing!</p>
        <button className="btn">Get Started</button>
      </div>

      {/* Features Section */}

      <div className="card">
        <h1>About Us</h1>
        <p>
          We are building an intuitive frontend experience using React,
          React Router, and modern CSS.
        </p>
      </div>
    </div>
  );
}

export default Home;