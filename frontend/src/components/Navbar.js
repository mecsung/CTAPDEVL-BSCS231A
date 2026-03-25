// Link is a component from react-router-dom that allows us to create links 
// to different routes in our application
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <h1>Notes System</h1>

                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;