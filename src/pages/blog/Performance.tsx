import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'

function Performance() {
    return (
        <>
            <header className="app-bar">
                <Link to="/blog" className="back-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    <img src={logo} alt="logo" className="app-bar-logo"/>
                    Blog
                </Link>
            </header>
            <div className="page-container legal-page">
                <h1>Building for Performance: Our Engineering Philosophy</h1>
                <p className="last-updated">December 28, 2025</p>

                <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
                    alt="Server room with blue lighting"
                    className="article-hero-image"
                />

                <section>
                    <p>
                        Performance is not a feature you add at the end. It is a philosophy you adopt from the
                        beginning. At Commit 451, we believe that fast software is better software. Not because speed
                        is a vanity metric, but because performance is a direct expression of respect for the user's
                        time and device.
                    </p>
                </section>

                <section>
                    <h2>Speed Is a Feature</h2>
                    <p>
                        Research consistently shows that users perceive fast applications as more reliable, more
                        trustworthy, and more enjoyable. A page that loads in under one second feels instant. A page
                        that takes three seconds feels slow. At five seconds, a significant percentage of users will
                        leave entirely. Every hundred milliseconds counts.
                    </p>
                    <p>
                        But performance is not just about initial load time. It is about every interaction feeling
                        responsive. Button clicks should produce immediate feedback. Scrolling should be smooth.
                        Transitions should feel natural. The entire experience should feel like the application is
                        anticipating the user's next move.
                    </p>
                </section>

                <section>
                    <h2>Choosing the Right Tools</h2>
                    <p>
                        Performance starts with tooling decisions. Every dependency you add increases your bundle size,
                        your attack surface, and your maintenance burden. We are deliberate about what we include.
                        Before adding a library, we ask: can we achieve this with what we already have? Is the library
                        well-maintained? How much does it add to the final bundle?
                    </p>
                    <p>
                        We favor lightweight frameworks and modern platform APIs over heavy abstractions. The browser
                        platform has evolved dramatically in recent years. Features that once required large libraries,
                        like smooth animations, complex layouts, and client-side storage, are now available natively.
                        Using the platform directly means less code to ship, parse, and execute.
                    </p>
                </section>

                <section>
                    <h2>Measuring What Matters</h2>
                    <p>
                        You cannot improve what you do not measure. We instrument our applications with performance
                        budgets and real user monitoring. We track Core Web Vitals not because Google tells us to, but
                        because they represent real aspects of user experience: how quickly content appears, how soon
                        the page becomes interactive, and how stable the layout is during loading.
                    </p>
                    <p>
                        Performance budgets create accountability. When a new feature pushes the bundle size over our
                        threshold, we treat it like a failing test. Something needs to be optimized or removed before
                        the change can ship. This discipline prevents the gradual performance degradation that plagues
                        so many web applications.
                    </p>
                </section>

                <section>
                    <h2>Performance as Accessibility</h2>
                    <p>
                        Fast software is accessible software. Not everyone has the latest phone or a fiber internet
                        connection. Millions of people access the web on budget devices over 3G networks. When we
                        optimize for performance, we are expanding our reach to include these users, not as an
                        afterthought, but as a first-class audience.
                    </p>
                    <p>
                        At Commit 451, we test on throttled connections and lower-end devices as part of our standard
                        workflow. If an application works well under these constraints, it will fly on high-end
                        hardware. The reverse is rarely true. Building for the constrained case first produces
                        software that is better for everyone, and that is the core of our engineering philosophy.
                    </p>
                </section>
            </div>
        </>
    )
}

export default Performance
