import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages and Components
import Home from './pages/home';
import Login from './pages/login';
import Navbar from './components/navbar';
import About from './pages/about';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
           
          </Routes>
        </div>
        <div className="login">
          <Routes>
            <Route path="/login" element={<Login />} />
           
          </Routes>
        </div>

        <div className="AboutUs">
          <Routes>
            <Route path="/about" element={<About />} />
           
          </Routes>
        </div>



      </BrowserRouter>
    </div>
  );
}

export default App;