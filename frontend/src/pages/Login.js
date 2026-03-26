const Login = () => {
    return (
    <div className="page-layout">

      <section className="hero">
        <h1>Welcome Back</h1>
        <p>Login to continue to your account</p>
      </section>

      <section className="features">
        <div className="card login-card">
          <h3>Login</h3>

          <form className="form">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </section>

      <section className="footer">
        <p>Don't have an account? Make an appointment to join!</p>
      </section>

    </div>
  );
};

export default Login;