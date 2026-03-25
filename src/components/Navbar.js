import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <h1 className="logo">Scheduler</h1>

        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;