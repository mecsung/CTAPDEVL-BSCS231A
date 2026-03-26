import "./Login.css";

const Login = () => {
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

      <form className="login-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;