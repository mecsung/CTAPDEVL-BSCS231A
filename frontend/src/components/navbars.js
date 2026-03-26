import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <h1>AppNote</h1>
                <nav>
                    <Link to="/home" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/logout" className="nav-link">Logout</Link>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;