import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />

        <div className="pages">
          <Routes>
            <Route
              path="/About"
              element={<About />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;