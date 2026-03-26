import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <h1>AppNote</h1>
                <nav>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/login" className="nav-link">Logout</Link>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;