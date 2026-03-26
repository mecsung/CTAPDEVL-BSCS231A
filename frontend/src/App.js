import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Navbars from './components/Navbars'
import AboutUs from './pages/AboutUs'
import Footer from './components/Footer'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbars />

                <main className="main-content">
                    <Routes>
                        <Route
                            path="/"
                            element={<Homepage />}
                        />
                        <Route
                            path="/login"
                            element={<Login />}
                        />
                        <Route
                            path="/aboutus"
                            element={<AboutUs />}
                        />
                    </Routes>
                </main>

                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App