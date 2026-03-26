function Login() {
  return (
    <div className="container login-container">
      <h1 className="page-title">Login</h1>
      <form>
        <div className="form-group">
          <label>Username</label>
          <input type="text" placeholder="Enter username" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;