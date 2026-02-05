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
                <p className="last-updated">Last Updated: February 4, 2026</p>

                <section>
                    <h2>Agreement to Terms</h2>
                    <p>
                        By accessing or using the services provided by Commit 451 ("we", "our", or "us")
                        through the Spaceport website and related applications, you agree to be bound by
                        these Terms of Service. If you do not agree to these terms, please do not use our services.
                    </p>
                </section>

                <section>
                    <h2>Use of Services</h2>
                    <p>
                        You may use our services only for lawful purposes and in accordance with these Terms.
                        You agree not to:
                    </p>
                    <ul>
                        <li>Use our services in any way that violates applicable laws or regulations</li>
                        <li>Attempt to gain unauthorized access to any part of our services</li>
                        <li>Interfere with or disrupt the integrity or performance of our services</li>
                        <li>Use automated systems or software to extract data from our services without permission</li>
                        <li>Transmit any malicious code, viruses, or harmful content</li>
                    </ul>
                </section>

                <section>
                    <h2>Intellectual Property</h2>
                    <p>
                        Our services and their original content, features, and functionality are owned by
                        Commit 451 and are protected by international copyright, trademark, and other
                        intellectual property laws. You may not reproduce, distribute, or create derivative
                        works without our express written permission.
                    </p>
                </section>

                <section>
                    <h2>User Content</h2>
                    <p>
                        Some of our services may allow you to upload, submit, or process content. You retain
                        ownership of any content you provide. By using our services, you grant us a limited
                        license to process your content solely to provide the requested service functionality.
                    </p>
                    <p>
                        You are responsible for ensuring you have the right to use any content you submit
                        and that it does not violate any third-party rights.
                    </p>
                </section>

                <section>
                    <h2>Advertisements</h2>
                    <p>
                        Our services may display advertisements provided by third parties, including Google
                        AdSense. These advertisements may be targeted based on your usage patterns and
                        cookies as described in our Privacy Policy. We are not responsible for the content
                        of third-party advertisements or any products or services advertised.
                    </p>
                </section>

                <section>
                    <h2>Cookies and Tracking</h2>
                    <p>
                        By using our services, you consent to the use of cookies and similar tracking
                        technologies as described in our Privacy Policy. These technologies help us
                        enhance your user experience, analyze usage, and serve relevant advertisements.
                    </p>
                </section>

                <section>
                    <h2>Third-Party Links</h2>
                    <p>
                        Our services may contain links to third-party websites or services that are not
                        owned or controlled by us. We are not responsible for the content, privacy policies,
                        or practices of any third-party sites or services.
                    </p>
                </section>

                <section>
                    <h2>Disclaimer of Warranties</h2>
                    <p>
                        Our services are provided "as is" and "as available" without warranties of any kind,
                        either express or implied. We do not warrant that our services will be uninterrupted,
                        error-free, or free of viruses or other harmful components.
                    </p>
                </section>

                <section>
                    <h2>Limitation of Liability</h2>
                    <p>
                        To the maximum extent permitted by law, Commit 451 shall not be liable for any
                        indirect, incidental, special, consequential, or punitive damages, or any loss of
                        profits or revenues, whether incurred directly or indirectly, or any loss of data,
                        use, or goodwill arising out of your use of our services.
                    </p>
                </section>

                <section>
                    <h2>Indemnification</h2>
                    <p>
                        You agree to indemnify and hold harmless Commit 451 and its officers, directors,
                        employees, and agents from any claims, damages, losses, or expenses arising out of
                        your use of our services or your violation of these Terms.
                    </p>
                </section>

                <section>
                    <h2>Changes to Terms</h2>
                    <p>
                        We reserve the right to modify these Terms at any time. We will provide notice of
                        significant changes by updating the "Last Updated" date. Your continued use of our
                        services after changes become effective constitutes acceptance of the revised Terms.
                    </p>
                </section>

                <section>
                    <h2>Termination</h2>
                    <p>
                        We may terminate or suspend your access to our services immediately, without prior
                        notice, for any reason, including if you breach these Terms.
                    </p>
                </section>

                <section>
                    <h2>Governing Law</h2>
                    <p>
                        These Terms shall be governed by and construed in accordance with applicable laws,
                        without regard to conflict of law principles.
                    </p>
                </section>

                <section>
                    <h2>Contact Us</h2>
                    <p>
                        If you have questions about these Terms, please contact us through our GitHub page
                        at{' '}
                        <a href="https://github.com/Commit451" target="_blank" rel="noopener noreferrer">
                            github.com/Commit451
                        </a>.
                    </p>
                </section>
            </div>
        </>
    )
}

export default Terms
