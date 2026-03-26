import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />

        <div className="pages">
          <Routes>
            <Route
              path="/About"
              element={<About />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;