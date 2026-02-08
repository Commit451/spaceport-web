import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'

function OpenSource() {
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
                <h1>Open Source and the Future of Software</h1>
                <p className="last-updated">December 15, 2025</p>

                <img
                    src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80"
                    alt="Code on a computer screen"
                    className="article-hero-image"
                />

                <section>
                    <p>
                        Open source is more than a licensing model. It is a way of building software that prioritizes
                        transparency, collaboration, and shared ownership. At Commit 451, open source is woven into
                        the fabric of how we work. We build on open source tools, we contribute to open source
                        projects, and we release our own work as open source whenever we can.
                    </p>
                </section>

                <section>
                    <h2>Standing on the Shoulders of Giants</h2>
                    <p>
                        Every modern software project is built on a foundation of open source. The languages we write
                        in, the frameworks we use, the databases that store our data, the operating systems our servers
                        run — the vast majority of this infrastructure is open source. This shared foundation has
                        enabled an explosion of innovation that would have been impossible in a world of proprietary
                        silos.
                    </p>
                    <p>
                        We take this foundation seriously. We do not just consume open source; we participate in it.
                        When we find a bug in a library we use, we submit a fix upstream. When we build a utility that
                        could help others, we publish it. When we learn something that took us hours to figure out, we
                        write documentation so the next person can learn it in minutes.
                    </p>
                </section>

                <section>
                    <h2>The Community Effect</h2>
                    <p>
                        The true power of open source lies in its community. A single developer can build a useful
                        tool. But a community of developers can make that tool robust, secure, well-documented, and
                        available in dozens of languages. Community review catches bugs that no amount of internal
                        testing would find. Community contributions add perspectives that no single team could
                        anticipate.
                    </p>
                    <p>
                        Participating in open source communities has made us better engineers. Code review from
                        strangers is humbling and educational. Maintaining a project that others depend on teaches
                        responsibility and empathy. Collaborating with people across time zones and cultures broadens
                        your understanding of how software is used around the world.
                    </p>
                </section>

                <section>
                    <h2>Transparency Builds Trust</h2>
                    <p>
                        When your code is open, you cannot hide behind marketing. The quality of your work speaks for
                        itself. Users can inspect the code that runs on their devices, security researchers can audit
                        it, and competitors can learn from it. This transparency creates a level of trust that no
                        amount of advertising can buy.
                    </p>
                    <p>
                        Open source also creates a natural incentive to write better code. When you know the world can
                        see your work, you tend to be more thoughtful about naming, documentation, architecture, and
                        test coverage. This is not about vanity. It is about accountability. Open source code tends to
                        be cleaner code because the feedback loop is tighter and more honest.
                    </p>
                </section>

                <section>
                    <h2>The Future Is Open</h2>
                    <p>
                        We believe the future of software is increasingly open. As artificial intelligence transforms
                        how code is written and maintained, open datasets, open models, and open toolchains will be
                        essential to ensuring that this transformation benefits everyone, not just a handful of large
                        companies.
                    </p>
                    <p>
                        At Commit 451, we are committed to being part of this open future. We will continue to share
                        our work, contribute to the projects we depend on, and build tools that empower developers
                        everywhere. Because the best software is not built in isolation. It is built together, in the
                        open, for everyone.
                    </p>
                </section>
            </div>
        </>
    )
}

export default OpenSource
