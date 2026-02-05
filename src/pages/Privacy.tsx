import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'

function Privacy() {
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
                <h1>Privacy Policy</h1>
                <p className="last-updated">Last Updated: February 4, 2026</p>

                <section>
                    <h2>Introduction</h2>
                    <p>
                        Commit 451 ("we", "our", or "us") operates the Spaceport website and related applications.
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                        when you use our services. Please read this policy carefully.
                    </p>
                </section>

                <section>
                    <h2>Information We Collect</h2>
                    <h3>Information You Provide</h3>
                    <p>
                        We may collect information you voluntarily provide when using our services, such as
                        contact information when reaching out for support.
                    </p>
                    <h3>Automatically Collected Information</h3>
                    <p>
                        When you access our services, we may automatically collect certain information, including:
                    </p>
                    <ul>
                        <li>Device information (browser type, operating system)</li>
                        <li>Usage data (pages visited, time spent, interactions)</li>
                        <li>IP address and approximate location</li>
                        <li>Cookies and similar tracking technologies</li>
                    </ul>
                </section>

                <section>
                    <h2>Cookies</h2>
                    <p>
                        We use cookies and similar technologies to enhance your user experience. Cookies are
                        small data files stored on your device that help us remember your preferences,
                        understand how you use our services, and improve functionality.
                    </p>
                    <p>
                        You can control cookies through your browser settings. However, disabling cookies
                        may affect the functionality of our services.
                    </p>
                </section>

                <section>
                    <h2>Advertising</h2>
                    <p>
                        We use Google AdSense to display advertisements on our services. Google AdSense may
                        use cookies and similar technologies to serve ads based on your prior visits to our
                        website or other websites. Google's use of advertising cookies enables it and its
                        partners to serve ads based on your visit to our sites and/or other sites on the Internet.
                    </p>
                    <p>
                        You may opt out of personalized advertising by visiting{' '}
                        <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
                            Google Ads Settings
                        </a>. For more information about how Google uses data, please visit{' '}
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                            Google's Privacy Policy
                        </a>.
                    </p>
                </section>

                <section>
                    <h2>How We Use Your Information</h2>
                    <p>We may use the information we collect to:</p>
                    <ul>
                        <li>Provide, maintain, and improve our services</li>
                        <li>Respond to your inquiries and provide customer support</li>
                        <li>Analyze usage patterns to enhance user experience</li>
                        <li>Display relevant advertisements</li>
                        <li>Comply with legal obligations</li>
                    </ul>
                </section>

                <section>
                    <h2>Information Sharing</h2>
                    <p>
                        We do not sell your personal information. We may share information with third parties
                        in the following circumstances:
                    </p>
                    <ul>
                        <li>With service providers who assist in operating our services (e.g., hosting, analytics)</li>
                        <li>With advertising partners such as Google AdSense</li>
                        <li>When required by law or to protect our rights</li>
                        <li>In connection with a merger, acquisition, or sale of assets</li>
                    </ul>
                </section>

                <section>
                    <h2>Data Security</h2>
                    <p>
                        We implement reasonable security measures to protect your information. However, no
                        method of transmission over the Internet or electronic storage is 100% secure, and
                        we cannot guarantee absolute security.
                    </p>
                </section>

                <section>
                    <h2>Children's Privacy</h2>
                    <p>
                        Our services are not directed to children under 13. We do not knowingly collect
                        personal information from children under 13. If you believe we have collected
                        information from a child under 13, please contact us.
                    </p>
                </section>

                <section>
                    <h2>Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. We will notify you of any
                        changes by posting the new policy on this page and updating the "Last Updated" date.
                    </p>
                </section>

                <section>
                    <h2>Contact Us</h2>
                    <p>
                        If you have questions about this Privacy Policy, please contact us through our
                        GitHub page at{' '}
                        <a href="https://github.com/Commit451" target="_blank" rel="noopener noreferrer">
                            github.com/Commit451
                        </a>.
                    </p>
                </section>
            </div>
        </>
    )
}

export default Privacy
