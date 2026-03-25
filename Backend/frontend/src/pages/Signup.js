import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    if (users.find((user) => user.email === email)) {
      alert("Email already registered!");
      return;
    }

    // Add new user
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! You can now login.");
    navigate("/login");
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSignup} style={{ maxWidth: "400px" }}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;