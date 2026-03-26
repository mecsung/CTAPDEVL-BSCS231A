import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
 return (
<nav style={{ backgroundColor: "#333", padding: "1rem" }}>
<Link to="/" style={{ color: "white", marginRight: "1rem", textDecoration: "none" }}>Home</Link>
<Link to="/about" style={{ color: "white", textDecoration: "none" }}>About Us</Link>
</nav>
 );
}