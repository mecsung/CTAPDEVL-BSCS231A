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
                    <Link to="/about">About Us</Link>
                    <Link to="/login">Login</Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;