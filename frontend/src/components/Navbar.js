import { NavLink } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <div className='app-name'>Kwen-Thought</div>
                    <nav>
                        <ul>
                            <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}> Home</NavLink></li>
                            <li><NavLink to="/login" className={({isActive}) => isActive ? 'active' : ''}> Login</NavLink></li>
                            <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}> About</NavLink></li>
                        </ul>
                    </nav>

            </div>
        </header>
    );

}

export default Navbar;