
const Login = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p className="subtitle">Login to your Scheduler account</p>

        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;