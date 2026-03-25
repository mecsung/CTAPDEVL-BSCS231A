import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get all users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find matching user
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Successful login
      localStorage.setItem("loggedIn", "true");
      setLoggedIn(true);
      navigate("/dashboard");
    } else {
      alert("Invalid email or password. Make sure you registered first!");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;