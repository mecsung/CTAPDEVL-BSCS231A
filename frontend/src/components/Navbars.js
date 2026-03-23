import { Link } from 'react-router-dom';

const Navbars = () => {
    return (
        <header>
            <div className="container">
                <h1>Notes System</h1>
                <Link to="/">
                    <nav>
                        <ul>
                            <li><Link to="/" >Home</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/aboutus">aboutus</Link></li>
                        </ul>
                    </nav>
                </Link>
            </div>
        </header>
    )
}

export default Navbars;