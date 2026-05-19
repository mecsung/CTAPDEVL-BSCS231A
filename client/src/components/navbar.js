import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleLogout = () => {
        logout();
    }

    return (
        <header>
            <div className="navbar-container">
                <h1>Noots</h1>

                <nav>

                    {user && (
                        <div className="logout">
                            <span>{user.email}</span>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    )}

                    {!user && (
                        <ul>
                            <li><Link to="/">Login</Link></li>
                            <li><Link to="/Home">Home</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Signup">Signup</Link></li>
                        </ul>
                    )}

                </nav>
            </div>
        </header>
    );
}

export default Navbar;