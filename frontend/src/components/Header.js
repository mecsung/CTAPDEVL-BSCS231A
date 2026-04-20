import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-left">
        <h1 className="logo">React App</h1>
      </div>

      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;