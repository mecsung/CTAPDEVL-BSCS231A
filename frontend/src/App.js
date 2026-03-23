import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Navbar from './components/navbars';
import About from './pages/about';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Navbar/>
      <About/>
        <div className="pages">
          <Routes>
              <Route
                path=''
                element={ <Login/> }
              />
          </Routes>
        </div>

        {/* <div className='pages-home'>
          <Home />
        </div> */}

      </BrowserRouter>
    </div>
  );
}

export default App;
