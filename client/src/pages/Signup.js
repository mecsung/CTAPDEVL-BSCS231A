import { useState } from "react";
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signup, isLoading, error } = useSignup();

    const handleSignup = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }

    return (
        <form className="signup" onSubmit={handleSignup}>
            <div className="signup-container">
                <h1>Signup traveler!</h1>
                <input 
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password} 
                />
                <button disabled={isLoading} className="signup-submit">Signup ka boi</button>
                {error && <div className="error">{error}</div>}
            </div>
        </form>
    );
}


export default Signup;



