const Login = () => {
    return (
        <div className="Login">
            <h1>Login </h1>
            <form>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="password"/>
                <button type="submit" >Login</button>
            </form>
        </div>
    )
}

export default Login;