import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'

const articles = [
    {
        slug: 'minimalist-design',
        title: 'The Art of Minimalist Design in Software',
        date: 'January 20, 2026',
        excerpt: 'Why less is more in UI/UX — removing clutter, focusing on core user needs, and designing for calm.',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80',
    },
    {
        slug: 'user-experience',
        title: 'Why User Experience Should Drive Every Decision',
        date: 'January 12, 2026',
        excerpt: 'How UX informs architecture, the hidden cost of bad UX, and what user-first thinking looks like in practice.',
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80',
    },
    {
        slug: 'building-for-performance',
        title: 'Building for Performance: Our Engineering Philosophy',
        date: 'December 28, 2025',
        excerpt: 'Fast load times, lightweight apps, choosing the right tools, and why performance is a form of accessibility.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    },
    {
        slug: 'open-source',
        title: 'Open Source and the Future of Software',
        date: 'December 15, 2025',
        excerpt: 'Why open source matters, the power of community, and how transparency builds trust in software.',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80',
    },
]

function Blog() {
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
            <div className="page-container blog-index">
                <h1>Blog</h1>
                <p className="blog-index-subtitle">
                    Thoughts on design, engineering, and building software that respects its users.
                </p>

                <div className="blog-grid">
                    {articles.map((article) => (
                        <Link key={article.slug} to={`/blog/${article.slug}`} className="blog-card">
                            <img src={article.image} alt={article.title} className="blog-card-image"/>
                            <div className="blog-card-body">
                                <p className="blog-card-date">{article.date}</p>
                                <h2 className="blog-card-title">{article.title}</h2>
                                <p className="blog-card-excerpt">{article.excerpt}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Blog
