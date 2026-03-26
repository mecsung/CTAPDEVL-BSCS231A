import { Link } from 'react-router-dom';
import '../styles/Navbars.css';

const Navbars = () => {
    return (
        <header>
            <div className="container">
                <h1>Notes System</h1>

                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbars;