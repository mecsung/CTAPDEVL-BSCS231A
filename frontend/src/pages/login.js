import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="login">
            <h1>Login</h1>
            <form action>
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='Password' />
                <Link to="/home">
                <button type="submit">Submit</button>
                </Link>

            </form>
        </div>
    )
}

export default Login;