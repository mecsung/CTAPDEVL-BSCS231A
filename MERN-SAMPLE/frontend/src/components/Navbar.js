import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
    const { user, dispatch } = useAuthContext();

    const handleLogout = () => {
        localStorage.removeItem('user');
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <header className="site-header">
            <div className="container">
                <div className="brand">
                    <p className="brand-tag">Not just notes… amazing notes</p>
                    <h1>
                        <NavLink to={user ? '/notes' : '/'} className="brand-link">
                            Spidey Notes
                        </NavLink>
                    </h1>
                </div>
                <nav aria-label="Main navigation">
                    <ul>
                        {user ? (
                            <>
                                <li>
                                    <NavLink to="/home">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/notes">Notes</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/create-note">Create</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" onClick={handleLogout} end>
                                        Logout
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <NavLink to="/login" end>
                                        Login
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/signup">Sign Up</NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;