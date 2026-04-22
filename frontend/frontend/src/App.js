import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";   
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <nav style={{ padding: "20px", backgroundColor: "#0d15ff" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/login" style={{ marginRight: "10px" }}>Login</Link>
        <Link to="/about">About Us</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
