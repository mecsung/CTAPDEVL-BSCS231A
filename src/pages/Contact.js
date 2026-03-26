import React from "react";
export default function Contact() {
 return (
<div style={{
     padding: "2rem",
     maxWidth: "800px",
     margin: "0 auto",
     fontFamily: "Arial, sans-serif"
   }}>
<h1 style={{ color: "#2c3e50", borderBottom: "2px solid #3498db", paddingBottom: "0.5rem" }}>Contact Us</h1>
<div style={{ marginTop: "1rem" }}>
<p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>You can reach us through the following channels:</p>
<ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", fontSize: "1.1rem" }}>
<li>Email: contact@ourwebsite.com</li>
<li>Phone: (02) 123-4567</li>
<li>Address: 123 Main St, City, Philippines</li>
</ul>
</div>
</div>
 );
}