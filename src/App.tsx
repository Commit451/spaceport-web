import {useEffect} from 'react'
import {BrowserRouter, Link, Route, Routes, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import MinimalistDesign from './pages/blog/MinimalistDesign'
import UserExperience from './pages/blog/UserExperience'
import Performance from './pages/blog/Performance'
import OpenSource from './pages/blog/OpenSource'
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
        <BrowserRouter>
            <ScrollToTop/>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/blog/minimalist-design" element={<MinimalistDesign/>}/>
                    <Route path="/blog/user-experience" element={<UserExperience/>}/>
                    <Route path="/blog/building-for-performance" element={<Performance/>}/>
                    <Route path="/blog/open-source" element={<OpenSource/>}/>
                    <Route path="/privacy" element={<Privacy/>}/>
                    <Route path="/terms" element={<Terms/>}/>
                </Routes>
                <footer className="footer">
                    <div className="footer-links">
                        <Link to="/about">About</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/privacy">Privacy</Link>
                        <Link to="/terms">Terms</Link>
                    </div>
                    <div className="footer-copyright">© 2026 Commit 451</div>
                </footer>
            </div>
        </BrowserRouter>
    )
}

export default App
