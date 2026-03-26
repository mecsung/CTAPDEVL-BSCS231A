import React from "react";

import { Link } from "react-router-dom";

export default function Navbar() {

  return (
<nav style={{ 

      backgroundColor: "#2c3e50", 

      padding: "1.2rem", 

      boxShadow: "0 2px 5px rgba(0,0,0,0.1)" 

    }}>
<Link to="/" style={{ 

        color: "white", 

        marginRight: "1.5rem", 

        textDecoration: "none", 

        fontSize: "1.1rem",

        fontWeight: "500"

      }}>Home</Link>
<Link to="/about" style={{ 

        color: "white", 

        marginRight: "1.5rem", 

        textDecoration: "none", 

        fontSize: "1.1rem",

        fontWeight: "500"

      }}>About Us</Link>
<Link to="/contact" style={{ 

        color: "white", 

        textDecoration: "none", 

        fontSize: "1.1rem",

        fontWeight: "500"

      }}>Contact</Link>
</nav>

  );

}
 