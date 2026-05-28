import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="login-page">
      <h1>Login Page</h1>

      <img
        src="https://wallpapers.com/images/hd/rick-and-morty-laptop-dvdfod54liazgx7e.jpg"
        alt="Rick and Morty laptop"
        className="login-image"
      />

      <p className="login-description">
        Aw jeez, just log in here so you can get back to your notes and stuff,
        okay? It is, like, a simple way to keep your important ideas in one
        place without losing track of everything.
      </p>

      <form className="login-form" onSubmit={handleLogin}>
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
        <button type="submit" disabled={isLoading}>Login</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Login;