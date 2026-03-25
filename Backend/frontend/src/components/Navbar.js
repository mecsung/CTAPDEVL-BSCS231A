import { Link, useLocation } from "react-router-dom";

const Navbar = ({ loggedIn, handleLogout }) => {
  const location = useLocation(); // to highlight active page

  const linkClass = (path) =>
    location.pathname === path ? "nav-link active" : "nav-link";

  return (
    <header>
      <div className="container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>Notes System</h1>
        </Link>

        <nav>
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link to="/contact" className={linkClass("/contact")}>
            Contact
          </Link>

          {loggedIn ? (
            <>
              <Link to="/dashboard" className={linkClass("/dashboard")}>
                Dashboard
              </Link>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className={linkClass("/login")}>
              Login
            </Link>
          )}

          {!loggedIn && (
            <Link to="/signup" className={linkClass("/signup")}>
              Signup
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;