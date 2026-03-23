import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <header>
            <div className="container">
                <h1>Noots</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Landing">Login</Link></li>
                    <li><Link to="/About">About</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default navbar;