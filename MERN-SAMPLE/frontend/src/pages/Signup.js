import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { dispatch } = useAuthContext();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            const response = await fetch('/api/user/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const json = await response.json();

            if (!response.ok) {
                setError(json.error || 'Signup failed.');
                setIsLoading(false);
                return;
            }

            localStorage.setItem('user', JSON.stringify(json));
            dispatch({ type: 'LOGIN', payload: json });
            navigate('/notes');
        } catch (err) {
            setError('Unable to sign up. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="page-shell login-page">
            <section className="auth-card">
                <p className="kicker">Get Your Spider Pass</p>
                <h2>Create Your Spidey Notes Account</h2>
                <p>Sign up to start saving your missions and class notes.</p>

                <form className="auth-form" onSubmit={handleSubmit}>
                    <label htmlFor="signup-username">Username</label>
                    <input
                        id="signup-username"
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        placeholder="e.g. peter.parker"
                    />

                    <label htmlFor="signup-password">Password</label>
                    <input
                        id="signup-password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Create a password"
                    />

                    <button type="submit" className="btn-primary" disabled={isLoading}>
                        {isLoading ? 'Creating account...' : 'Sign Up'}
                    </button>

                    {error && <p className="form-message form-error">{error}</p>}
                </form>

                <p>
                    Already have an account? <NavLink to="/login">Log in</NavLink>
                </p>
            </section>
        </main>
    );
};

export default Signup;
