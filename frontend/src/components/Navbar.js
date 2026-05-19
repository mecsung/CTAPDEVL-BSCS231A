import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <h1>My App</h1>
        <nav>
          {user && (
          <div className="logout">
            <button onClick={handleLogout}>Logout</button>
          </div>
          )}
          {!user && (
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
