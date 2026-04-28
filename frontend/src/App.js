import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <div className="pages">

            <Routes>
              <Route path="/" 
                element={<Home />} 
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/about"
                element={<About />}
              />
            </Routes>
            
          </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;