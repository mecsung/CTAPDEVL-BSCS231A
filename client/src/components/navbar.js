import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <header>
            <div className="navbar-container">
                <h1>Noots</h1>
                <ul>
                    <li><Link to="/">Login</Link></li>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default navbar;