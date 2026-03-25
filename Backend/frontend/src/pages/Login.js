// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple demo login
    if (email && password) {
      localStorage.setItem("loggedIn", "true");
      setLoggedIn(true);
      navigate("/dashboard");
    }
  };

  return (
    <div className="pages">
      <div className="card">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;