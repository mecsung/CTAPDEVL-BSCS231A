import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);
        setError(null);

        // sample logic
        console.log(email, password);

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="login">
            <div className="login-box">
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
                        {isLoading ? "Loading..." : "Log In"}
                    </button>

                    {error && <div className="error">{error}</div>}

                </form>

            </div>
        </div>
    );
};

export default Login;
