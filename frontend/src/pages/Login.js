const Login = () => {
    return (
        <div className = "login">
            <div className="login-box">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Username"/>
                    <input type="password" placeholder="Password"/>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;