const Login = () => {
    return (
        <div className="login">

            <h1>Login</h1>
            <form className="login-form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit" className="btn-primary">Login</button>
            </form>

        </div>
    )
}

export default Login;