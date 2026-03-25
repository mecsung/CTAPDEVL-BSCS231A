import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container">
            <h1> My app </h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/About">About</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;