function Login() {
  return (
    <div className="page-container">
      <div className="card">
        <h1>Login</h1>
        <form>
          <div>
            <label>Email or Mobile</label><br />
            <input type="text" placeholder="Enter your email or mobile number" />
          </div>
          <div style={{ marginTop: "16px" }}>
            <label>Password</label><br />
            <input type="password" placeholder="Enter your password" />
          </div>
          <button style={{ marginTop: "20px" }}>Login</button>
        </form>
      </div>
    </div>
  );
}
export default Login;
