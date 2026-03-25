// src/pages/Contact.js
import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}! Your message has been received.`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="pages">
      <div className="card">
        <h1>Contact Us</h1>
        <p>Have questions or feedback? Fill out the form below and we’ll get back to you.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            required
          />
          <button className="btn" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;