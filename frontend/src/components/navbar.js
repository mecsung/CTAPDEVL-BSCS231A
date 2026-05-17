import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          MatthewNote
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/login" className="login-btn">
            Login
          </Link>
          <Link to="/signup" className="login-btn">
            Signup
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;