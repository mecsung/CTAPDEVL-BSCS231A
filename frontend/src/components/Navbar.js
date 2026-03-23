import { Link } from "react-router-dom";   

const Navbar = () => { 
    return ( 
        <header>
            <div className="container">
                <Link to="/">
                    <h1>My React App Testing Site</h1>
                   <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/about">About Me</Link></li>
                        </ul>
                   </nav>
                </Link>              
            </div>
        </header>
        
     );
}

export default Navbar;