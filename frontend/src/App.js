import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import Navbar from './Components/Navbar';
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
              <Route
                path='/aboutus'
                element={<AboutUs />}
              />
              
              </Routes>
 
          </div>
          </BrowserRouter>
    </div>
  );
}

export default App;
