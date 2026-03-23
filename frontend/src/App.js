import { BrowserRouter, Routes, Route} from "react-router-dom";
// Pages and Components
import Home from './pages/Home';
import Login from "./pages/Login";
import Navbar from './components/Navbar';
import About from './pages/About';

function App() {
  return (
    <div className="App">
          <BrowserRouter>

            <Navbar />

            <div className = "pages">
              <Routes>
                <Route
                path="/"
                element={<Home />}
                />
              </Routes>
              </div>
            <div className = "login">
              <Routes>
                <Route
                path="/login"
                element={<Login />}
                />
              </Routes>
              </div>
            <div className = "about">
              <Routes>
                <Route
                path="/about"
                element={<About />}
                />
              </Routes>
              </div>

          </BrowserRouter>
    </div>
  );
}

export default App;
