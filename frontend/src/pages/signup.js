import { useState } from 'react';
import Button from "../components/button";
import InputField from "../components/inputfield";


const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault()

        console.log(email, password);
    };
    
    return (
        <form className='signup' onSubmit={handleSignUp}>
            <h3>Signup</h3>

            <InputField
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <InputField
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <Button variant="primary" type="submit">
                Signup
            </Button>
        </form>
    )
}

export default Signup;