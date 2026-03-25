import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";

// Components
import Navbar from "./components/Navbar";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem("loggedIn");
    if (status === "true") setLoggedIn(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
            <Route path="/signup" element={<Signup />} />

            {/* Protected Dashboard */}
            <Route
              path="/dashboard"
              element={loggedIn ? <Dashboard /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;