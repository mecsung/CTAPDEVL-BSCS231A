const Login = () => {
    return (
        <div className="login">
            <div className="login-card">
                <h1>Login</h1>
                <form>
                    <label>Username</label>
                    <input type="text" placeholder="Enter your username" />

                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" />

                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;