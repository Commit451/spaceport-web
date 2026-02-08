import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'

function UserExperience() {
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
                <h1>Why User Experience Should Drive Every Decision</h1>
                <p className="last-updated">January 12, 2026</p>

                <img
                    src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80"
                    alt="Person using a mobile app"
                    className="article-hero-image"
                />

                <section>
                    <p>
                        Software exists to serve people. That statement sounds obvious, yet a surprising number of
                        technical decisions are made without the user in mind. Architecture is chosen for engineering
                        elegance. Technologies are selected because they are trending. Features are prioritized based
                        on what is easiest to build, not what is most needed. At Commit 451, we take a different
                        approach: user experience comes first, and every other decision follows from it.
                    </p>
                </section>

                <section>
                    <h2>UX Is Not a Layer</h2>
                    <p>
                        A common misconception is that user experience is something applied on top of a finished
                        product, like a coat of paint. In reality, UX is structural. It shapes the foundation. The
                        way data flows, the speed of response, the error messages a user sees, the number of steps
                        required to complete a task — all of these are UX decisions, and all of them are made deep in
                        the engineering process.
                    </p>
                    <p>
                        When we begin a project, our first conversations are about the people who will use the
                        software. What are they trying to accomplish? What frustrates them about existing tools? What
                        would delight them? These questions shape our technical choices, not the other way around.
                    </p>
                </section>

                <section>
                    <h2>The Hidden Cost of Bad UX</h2>
                    <p>
                        Bad user experience is expensive. Not just in lost customers, but in support tickets, training
                        materials, workarounds, and wasted time. Every confusing button generates a question. Every
                        slow-loading page erodes trust. Every unnecessary step in a workflow multiplies across every
                        user, every day, creating a staggering cumulative cost.
                    </p>
                    <p>
                        Companies often underestimate this cost because it is invisible. There is no line item in the
                        budget for "time users spent figuring out our confusing interface." But the cost is real, and
                        it compounds. The organizations that invest in UX early save enormously over the life of a
                        product.
                    </p>
                </section>

                <section>
                    <h2>User-First Thinking in Practice</h2>
                    <p>
                        Putting users first does not mean building whatever they ask for. Users are excellent at
                        identifying problems but often poor at prescribing solutions. Our job is to listen deeply to
                        the problem, then apply our expertise to craft the right solution. Sometimes that means
                        building a feature. Sometimes it means removing one.
                    </p>
                    <p>
                        We validate ideas quickly through prototypes and real feedback. We measure actual behavior,
                        not just stated preferences. We test on slow connections and small screens because that is
                        where many of our users live. We treat accessibility not as a checklist item but as a core
                        design constraint that makes everything better for everyone.
                    </p>
                </section>

                <section>
                    <h2>Building Empathy Into Engineering</h2>
                    <p>
                        The best engineers we know are deeply empathetic. They think about edge cases not as technical
                        puzzles but as real people in real situations. What happens when the network drops? What if
                        someone has only one hand free? What if English is not their first language?
                    </p>
                    <p>
                        At Commit 451, we cultivate this empathy as a core engineering skill. We use our own products
                        daily. We watch real people use them. We sit with the discomfort of seeing someone struggle
                        with something we built, and we use that discomfort as fuel to make it better. That is what
                        user-first engineering looks like, and it produces software that people genuinely love to use.
                    </p>
                </section>
            </div>
        </>
    )
}

export default UserExperience
