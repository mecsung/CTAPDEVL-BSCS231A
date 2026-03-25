import { Link } from "react-router-dom";

const Navbar = () => {
    return  (
        <header>
            <div className="container">
                <div className="navBarLogo">Notes App</div>
                <ul className="navBarLinks">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar;