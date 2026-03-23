import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>My React App</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;