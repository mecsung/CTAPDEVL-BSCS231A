import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Navbars from './components/Navbars';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbars />

        <div className="pages">
          <Routes>
            <Route
              path='/'
              element={<Homepage/>} 
            />
            <Route
              path='/login'
              element={<Login/>} 
            />
            <Route
              path='/aboutus'
              element={<AboutUs/>} 
            />

          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
