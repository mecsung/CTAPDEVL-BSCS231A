const Login =() => {
    return (
        <div className = "login">
            <h1>Login</h1>
            <form>
                <input type ="text" placeholder ="Username"></input>
                <input type ="password" placeholder ="Password"></input>
                <button type ="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;