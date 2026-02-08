import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'

function About() {
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
                <h1>About Commit 451</h1>
                <p className="last-updated">
                    We build software that respects your time, your attention, and your device.
                </p>

                <section>
                    <h2>Our Story</h2>
                    <p>
                        Commit 451 started with a simple frustration: too much software is bloated, slow, and designed
                        to capture attention rather than serve a purpose. We set out to build the opposite — tools and
                        applications that are fast, focused, and genuinely useful.
                    </p>
                    <p>
                        The name "Commit 451" is a nod to both the act of committing code and the spirit of creative
                        defiance. Like the literary reference suggests, we believe in preserving what matters and
                        burning away the unnecessary. In software, that means stripping away bloat, rejecting dark
                        patterns, and building things that people actually want to use.
                    </p>
                    <p>
                        Based on a passion for clean engineering and thoughtful design, we create web applications,
                        developer tools, and open source libraries. Our Spaceport platform serves as a launch site
                        for these projects — a place where each app and experience can stand on its own while being
                        part of a larger ecosystem.
                    </p>
                </section>

                <section>
                    <h2>Our Values</h2>
                    <div className="about-values-grid">
                        <div className="about-value-card">
                            <h3>Craftsmanship</h3>
                            <p>
                                We treat software as a craft, not a commodity. Every interaction is considered, every
                                edge case is handled, and every detail is polished. We would rather ship one great
                                feature than ten mediocre ones.
                            </p>
                        </div>
                        <div className="about-value-card">
                            <h3>Simplicity</h3>
                            <p>
                                Complexity is the enemy of usability. We relentlessly simplify our interfaces, our
                                code, and our processes. If something can be removed without losing value, it should be.
                            </p>
                        </div>
                        <div className="about-value-card">
                            <h3>Performance</h3>
                            <p>
                                Fast software is respectful software. We optimize for real-world conditions — slower
                                devices, spotty connections, limited data plans. If it works well under constraints,
                                it works well everywhere.
                            </p>
                        </div>
                        <div className="about-value-card">
                            <h3>Open Source</h3>
                            <p>
                                We believe in building in the open. Open source creates accountability, enables
                                collaboration, and gives back to the community that makes modern software possible.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>How We Work</h2>
                    <p>
                        Our development process is built around rapid iteration and real feedback. We start with the
                        user's problem, prototype quickly, test with real people, and refine until the experience feels
                        effortless. We keep our technology stack lean and modern, favoring tools that produce small
                        bundles, fast load times, and maintainable codebases.
                    </p>
                    <p>
                        Quality is not negotiable. We write tests, we review code carefully, and we monitor performance
                        in production. But quality does not mean perfection — it means shipping work we are proud of,
                        learning from real usage, and continuously improving. We would rather release something simple
                        and solid than something ambitious and fragile.
                    </p>
                </section>
            </div>
        </>
    )
}

export default About
