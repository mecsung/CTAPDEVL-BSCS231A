import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <div className="header-container">
                <Link to="/" className="logo">
                    <h1>Notes System</h1>
                </Link>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/About">About Us</Link>
                    <Link to="/Login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;