import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="site-header">
            <div className="container">
                <div className="brand">
                    <p className="brand-tag">Not just notes… amazing notes</p>
                    <h1>Spidey Notes</h1>
                </div>
                <nav aria-label="Main navigation">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;