// src/pages/Dashboard.js
import React from "react";

function Dashboard() {
  return (
    <div className="pages">
      <div className="card">
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard! You are successfully logged in.</p>
      </div>

      <div className="card">
        <h1>Statistics</h1>
        <p>Here you can add charts, stats, and other data about the user.</p>
      </div>
    </div>
  );
}

export default Dashboard;