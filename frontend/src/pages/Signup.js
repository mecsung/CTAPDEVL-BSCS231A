import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import "./Login.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();

  const handleSignup = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <div className="login-page">
      <h1>Signup Page</h1>

      <img
        src="https://wallpapers.com/images/hd/rick-and-morty-laptop-dvdfod54liazgx7e.jpg"
        alt="Rick and Morty laptop"
        className="login-image"
      />

      <p className="login-description">
        Aw jeez, create an account here so you can start keeping track of your
        notes and stuff, okay? It is, like, super easy to get started.
      </p>

      <form className="login-form" onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>Sign Up</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Signup;
