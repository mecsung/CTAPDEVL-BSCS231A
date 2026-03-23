import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <h1>My App</h1>
                    <nav>
                        <ul>
                            <li><Link to ="/"> Home</Link></li>
                            <li><Link to ="/Login"> Login</Link></li>
                            <li><Link to ="/About"> About</Link></li>
                        </ul>
                    </nav>

            </div>
        </header>
    );

}

export default Navbar;