const Login = () => {
    return (
        <div className="login">
            <h1>Login Page</h1>
            <form>
                <input type="text" placaholder="Username" />
                <input type="password" placaholder="Password" />
                <button type="submit">Login</button>
            </form>
         </div>
    );
}

export default Login;