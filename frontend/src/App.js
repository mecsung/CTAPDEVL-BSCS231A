import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import About from './pages/About';
import Footer from './components/Footer';  

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar/>

        <div className="pages">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/About' element={<About />} />
          </Routes>
        </div>

        <Footer />  

      </BrowserRouter>
    </div>
  );
}

export default App;