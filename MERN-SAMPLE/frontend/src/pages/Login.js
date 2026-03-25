const Login = () => {
    return (
        <main className="page-shell login-page">
            <section className="auth-card">
                <p className="kicker">Secure City Access</p>
                <h2>Login To Spidey Notes</h2>
                <p>Sign in to continue organizing your missions and class notes.</p>

                <form className="auth-form" action="">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" placeholder="e.g. peter.parker" />

                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" placeholder="Enter your password" />

                    <button type="submit" className="btn-primary">Login</button>
                </form>
            </section>
        </main>
    );
}

export default Login;