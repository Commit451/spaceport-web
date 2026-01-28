import {useEffect} from 'react'
import {BrowserRouter, Link, Route, Routes, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import './App.css'

function ScrollToTop() {
    const {pathname} = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

function App() {
    return (
        <BrowserRouter basename="/spaceport-web">
            <ScrollToTop/>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/privacy" element={<Privacy/>}/>
                    <Route path="/terms" element={<Terms/>}/>
                </Routes>
                <footer className="footer">
                    <div className="footer-links">
                        <Link to="/privacy">Privacy</Link>
                        <Link to="/terms">Terms</Link>
                    </div>
                    <div className="footer-copyright">© 2025 Commit 451</div>
                </footer>
            </div>
        </BrowserRouter>
    )
}

export default App
