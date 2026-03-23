import {BrowserRouter, Routes, Route } from 'react-router-dom'

// pages and components
import Home from './pages/Home';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar/>

        <div className="pages">
          <Routes>
            <Route 
              path='/'
              element={<Home />}
            />
          </Routes>
        </div>

        <div className="Login">
          <Routes>
            <Route 
              path='/login'
              element={<Login />}
            />
          </Routes>
        </div>

        <div className="AboutUs">
          <Routes>
            <Route 
              path='/aboutUs'
              element={<AboutUs />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
