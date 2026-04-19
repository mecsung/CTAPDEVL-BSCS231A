import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Login from "./pages/Login";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />

        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        <Footer />        import Navbar from './components/Navbar';
      </div>
    </BrowserRouter>
  );
};

export default App;