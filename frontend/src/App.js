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

      <Navbar/>
      <About/>
        <div className="pages">
          <Routes>
              <Route
                path='/login'
                element={ <Login/> }
              />

              <Route
                path='/'
                element={ <Home/> }
              />
          
              <Route
                path='/logout'
                element={ <Logout/> }
              />
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
