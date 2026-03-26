import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Navbar from './components/navbars';
import About from './pages/about';
import Logout from './pages/logout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/logout" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/logout" element={<Logout />} />

        </Routes>
      </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
