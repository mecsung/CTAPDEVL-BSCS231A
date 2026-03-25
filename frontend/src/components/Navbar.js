import { Link } from "react-router-dom";   

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>My React App Testing Site</h1>
                </Link>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/about">About Me</Link>
                </nav>
            </div>
        </header>

     );
}

export default Navbar;