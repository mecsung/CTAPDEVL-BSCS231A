const Login = () => {
    return (
        <div className="login">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="username" />
                <input type="text" placeholder="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;