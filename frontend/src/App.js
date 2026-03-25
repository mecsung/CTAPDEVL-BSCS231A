import { BrowserRouter, Routes, Route } from "react-router-dom"; 

// pages
import Home from "./pages/home";
import Login from "./pages/login";
import About from "./pages/about";

// components
import Navbar from "./components/navbar";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
