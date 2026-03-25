const Login = () => {
    return (
        <div className="login">
            <h1>Login Page</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" placaholder="Username" />
                <label htmlFor="password">Password:</label>
                <input type="password" placaholder="Password" />
                <button type="submit">Login</button>
            </form>
         </div>
    );
}

export default Login;