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
            <div className="header-container">
                <Link to="/" className="logo">
                    <h1>Notes System</h1>
                </Link>

                {user && (
                <div className="logout">
                <button onClick={ handleLogout }>Logout</button>
                </div>
                )}
                {!user && (
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/About">About Us</Link>
                    <Link to="/Login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </nav>     
                )}
            </div>
        </header>
    );
};

export default Navbar;