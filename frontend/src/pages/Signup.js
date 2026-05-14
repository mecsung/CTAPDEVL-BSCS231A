import { useState } from "react";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSignup = async (e) => {
    e.preventDefault();

    setError(null); // reset error state

    try {
        const response = await fetch("/api/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
        setError(data.error || "Signup failed");
        return;
        }

        // Save token to localStorage (or context)
        localStorage.setItem("user", JSON.stringify(data));

        console.log("Signup successful:", data);
    } catch (err) {
        setError("Something went wrong. Please try again.");
        console.error(err);
    }
    };

    return (
        <form className="signup" onSubmit={handleSignup}>
            <h3>Sign Up</h3>

            <label>Email</label>
            <input 
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label>Password</label>
            <input 
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button type="submit">Sign Up</button>
            {error && <div className="error">{error}</div>}
        </form>
    )


}


export default Signup;