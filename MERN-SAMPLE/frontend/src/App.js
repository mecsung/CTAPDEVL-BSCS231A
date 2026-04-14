import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Notes from './pages/Notes';
import Login from './pages/Login';
import About from './pages/About';
import Navbar from './components/Navbar';
import NoteForm from './components/NoteForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />

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
              path='/notes'
              element={<Notes />}
            />

            <Route
              path='/about'
              element={<About />}
            />

            <Route
              path='/create-note'
              element={<NoteForm />}
            />

          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
