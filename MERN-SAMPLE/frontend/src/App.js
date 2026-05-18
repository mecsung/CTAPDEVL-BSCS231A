import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Notes from './pages/Notes';
import Login from './pages/Login';
import About from './pages/About';
import Navbar from './components/Navbar';
import NoteForm from './components/NoteForm';
import Signup from './pages/Signup';
import { useAuthContext } from './hooks/useAuthContext';

const RequireAuth = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />

        <div className="pages">
          <Routes>

            <Route
              path='/'
              element={user ? <Navigate to="/notes" replace /> : <Login />}
            />

            <Route
              path='/login'
              element={user ? <Navigate to="/notes" replace /> : <Login />}
            />

            <Route
              path='/signup'
              element={user ? <Navigate to="/notes" replace /> : <Signup />}
            />

            <Route
              path='/notes'
              element={(
                <RequireAuth user={user}>
                  <Notes />
                </RequireAuth>
              )}
            />

            <Route
              path='/about'
              element={(
                <RequireAuth user={user}>
                  <About />
                </RequireAuth>
              )}
            />

            <Route
              path='/home'
              element={(
                <RequireAuth user={user}>
                  <Home />
                </RequireAuth>
              )}
            />

            <Route
              path='/create-note'
              element={(
                <RequireAuth user={user}>
                  <NoteForm />
                </RequireAuth>
              )}
            />

            <Route
              path='*'
              element={<Navigate to={user ? '/notes' : '/'} replace />}
            />

          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
