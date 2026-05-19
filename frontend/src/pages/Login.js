import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login, error, isLoading } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(email, password);
    }

    return (
        <div className="login">
            <div className="login-card">
                <h1>Login</h1>

                <form onSubmit={handleSubmit}>

                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button disabled={isLoading} type="submit">
                        {isLoading ? "Loading..." : "Sign In"}
                    </button>

                    {error && <div className="error">{error}</div>}

                </form>
            </div>
        </div>
    );
};

export default Login;