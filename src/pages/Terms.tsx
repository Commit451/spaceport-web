import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'

function Terms() {
    return (
        <>
            <header className="app-bar">
                <Link to="/" className="back-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    <img src={logo} alt="logo" className="app-bar-logo"/>
                    Back
                </Link>
            </header>
            <div className="page-container legal-page">
                <h1>Terms of Service</h1>
                <p className="last-updated">Last Updated: January 23, 2025</p>

            </div>
        </>
    )
}

export default Terms
