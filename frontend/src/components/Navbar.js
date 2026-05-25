import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

// just for icons mwehehehehe
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
// npm install @fortawesome/react-fontawesome
// npm install @fortawesome/free-solid-svg-icons

const Navbar = () => {
    const { logout } = useLogout();

    const handleLogout = () => {
        logout();
    }

    return (
        <header>
            <div className="container">
                <h1>My App ⋆✴︎˚｡⋆ ⊹₊</h1>
                <nav>
                    <li><FontAwesomeIcon icon={faHouse} className="home-icon" /><Link to= '/'>Home</Link></li>
                    <li><FontAwesomeIcon icon={faUser} className="user-icon" /><Link to= '/login'>Login</Link></li>
                    <li><FontAwesomeIcon icon={faUser} className="user-icon" /><Link to= '/signup'>Signup</Link></li>
                    <li><FontAwesomeIcon icon={faCircleInfo} className="info-icon" /><Link to= '/about'>About</Link></li>

                    <div className="logout">
                        <button className="btn btn-logout" onClick={handleLogout}>Logout</button>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;