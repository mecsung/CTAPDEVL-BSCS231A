import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

    return (
        <header className="site-header">
            <div className="container">
              <h1>My Note App</h1>
              <nav aria-label="Main navigation">
                <ul>
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/About us">About Us</Link></li>
                  <li>
                    <button type="button" className="nav-logout" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
        </header>
    )
   
}



export default Navbar;