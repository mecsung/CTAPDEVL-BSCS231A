import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Pages and components
import Home from './pages/Home';
import Login from './pages/login';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';

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
              <Route
                path='/login'
                element={<Login />}
              />
              </Routes>

          </div>
          </BrowserRouter>
    </div>
  );
}

export default App;
