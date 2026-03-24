import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home  from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer   from './components/Footer';
import './css/App.css';

function App() {
  return (
    <div className="App">
       <BrowserRouter>

       <Navbar/>

      <div className="pages">
            <Routes> 

              <Route   
                path='/'
                element={<Home />} 
              />
              <Route
                  path='/login'
                  element={<Login />}
              />
              <Route
                  path='/about'
                  element={<About />}
              />

            </Routes>

      </div>
      <Footer />
            {/* <div className="pages-home">
                  <Home />
            </div> */}
      </BrowserRouter>     
    </div>

  );
}

export default App;
