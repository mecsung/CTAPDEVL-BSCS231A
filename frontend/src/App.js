// BrowserRouter: A component that uses the HTML5 history API 
// to keep your UI in sync with the URL
// Routes: A component that looks through all its children <Route> elements and
// renders the first one whose path matches the current URL.
// Route: A component that renders some UI when its path matches the current URL
// react-router-dom is the official routing library for React applications 
// it enables navigation between different components in your React app 
// without reloading the page
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar';

// function App() is the main component of the application 
// it sets up the routing for the app using BrowserRouter, Routes, 
// and Route components from react-router-dom 
// it also includes the Navbar component which contains links 
// to different pages of the app 
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />

          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>

            <Routes>
              <Route path="/login" element={<Login />} />
            </Routes> 

            <Routes>
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

// export default App; allows other files to import the App component 
// and use it in their code
// The default tells the importing file that this is the main component to be imported
// In this case, when another file imports from './App', 
// it will receive the App component by default
export default App;


