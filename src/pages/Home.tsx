import logo from '../assets/logo.png'

function Home() {
    return (
        <main className="main-content">
            <div className="home-content">
                <img src={logo} className="logo" alt="Logo"/>
                <h1 className="app-name">Commit 451</h1>
                <p className="app-subtitle">Spaceport</p>
            </div>
        </main>
    )
}

export default Home
