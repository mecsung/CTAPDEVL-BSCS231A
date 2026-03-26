import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
//Pages and components
import Home from './pages/Home';
import Login from './pages/login';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </div>
  );
}

function AppLayout() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/' || location.pathname === '/login';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <div className={hideNavbar ? 'pages pages--no-padding' : 'pages'}>
        <Routes>
          <Route 
          path='/' element={<Login />} 
          />
          <Route 
          path='/home' element={<Home />} 
          />
          <Route 
          path='/About us' element={<AboutUs />} 
          />
          <Route 
          path='/login' element={<Login />} 
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
