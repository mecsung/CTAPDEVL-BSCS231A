import { NavLink } from "react-router-dom";
import "./navbar.css";
import Button from "./button";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <NavLink to="/" className="navbar-logo">
          Notes App ni JEBET
        </NavLink>
        <nav className="navbar-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            About
          </NavLink>
          <NavLink to="/login">
            <Button variant="primary">Login</Button>
          </NavLink>
          <NavLink to="/signup">
            <Button variant="primary">Signup</Button>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
