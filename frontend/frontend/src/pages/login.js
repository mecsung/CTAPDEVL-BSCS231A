import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <h1>Login Page</h1>
      <form className="login-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
