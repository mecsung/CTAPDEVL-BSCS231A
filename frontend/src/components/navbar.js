import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import "./Navbar.css";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
  }

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">MatthewNote</Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          {user && (
            <div className="logout">
              <span>{user.email}</span>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
          {!user && (
            <>
              <Link to="/login" className="login-btn">Login</Link>
              <Link to="/signup" className="login-btn">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
