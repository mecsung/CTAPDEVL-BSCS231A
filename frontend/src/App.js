import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />

          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>

            <Routes>
              <Route path="/login" element={<Login />} />
            </Routes> 

            <Routes>
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;


