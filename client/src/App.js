import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import About from './pages/About';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path='/'
              element={<Landing />}
            />
            <Route
              path='/login'
              element={<Landing />}
            />
            <Route
              path='/signup'
              element={<Signup />}
            />
            <Route
              path='/Home'
              element={<Home />}
            />
            <Route
              path='/About'
              element={<About />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
