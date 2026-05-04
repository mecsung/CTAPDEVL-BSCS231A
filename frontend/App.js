import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './src/components/AboutUs';
import Navbar from './src/components/Navbar';
import Home from './src/pages/Home';
import Login from './src/pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
        <footer>
          <AboutUs />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
