import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();

  const handleSignup = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };

  return (
    <div className="signup">
      <div className="signup-box">
        <h1>Sign Up</h1>

        <form onSubmit={handleSignup}>

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <button disabled={isLoading}>
            {isLoading ? "Loading..." : "Sign Up"}
          </button>

          {error && <div className="error">{error}</div>}

        </form>
      </div>
    </div>
  );
};

export default Signup;
