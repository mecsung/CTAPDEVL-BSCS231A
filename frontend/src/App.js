import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />

        <div className="pages">
          <Routes>
            <Route path="/" 
              element={<Home />} 
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/about"
              element={<About />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
