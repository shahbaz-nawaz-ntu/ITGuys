import { Link } from 'react-router-dom';
import logo1 from "../../assets/images/logo.png";

import '@fortawesome/fontawesome-free/css/all.min.css';


function FooterHomeOne({ className }) {

    const handleQuoteClick = () => {
        if (window.dataLayer) {
            window.dataLayer.push({
                event: "quote_button_click",
            });
        }

        // existing functionality (WhatsApp / popup / scroll)
    };
    return (
        <footer className={`main-footer ${className || ''}`} id='footer' style={{ backgroundColor: 'var(--theme-color1)', color: '#fff' }}>
            {/* Removed background image for cleaner look, or keep with overlay if needed */}
            {/* <div className="bg-image" style={{ backgroundImage: `url(${Image1})` }}></div> */}

            {/* Widgets Section */}
            <div className="widgets-section py-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="auto-container">
                    <div className="row g-4 justify-content-between">

                        {/* Footer Column - About */}
                        <div className="col-lg-4 col-md-6 col-sm-12 order-1">
                            <div className="footer-widget about-widget">
                                <div className="logo mb-3">
                                    <Link to="/"><img src={logo1} alt="Logo" style={{ maxWidth: '150px' }} /></Link>
                                </div>
                                <div className="text-white-50 small mb-3" style={{ lineHeight: '1.6' }}>
                                    Disclaimer: ITGuy.ae is a registered service provider authorized under UAE licensing authority (SC242015901) to deliver professional IT infrastructure and security surveillance solutions.
                                </div>
                                <ul className="social-icon-two d-flex gap-3">
                                    <li><Link to="https://www.facebook.com/share/19sKHxVvjn/?mibextidgit=wwXIfr" className="text-white hover:text-[var(--theme-color2)] transition-colors"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link to="https://www.tiktok.com/@itguy.ae?_r=1&_t=ZS-91X9pJlL7aO" className="text-white hover:text-[var(--theme-color2)] transition-colors"><i className="fab fa-tiktok"></i></Link></li>
                                    <li><Link to="https://share.google/EtgQgHHTLNCrqz6zL " className="text-white hover:text-[var(--theme-color2)] transition-colors"><i className="fab fa-google"></i></Link></li>
                                    <li><Link to="https://wa.me/971588996975" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--theme-color2)] transition-colors"><i className="fab fa-whatsapp"></i></Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Footer Column - Quick Links */}
                        <div className="col-lg-2 col-md-6 col-sm-12 order-3 order-lg-2">
                            <div className="footer-widget links-widget">
                                <h5 className="widget-title mb-3 fw-bold text-white">Quick Links</h5>
                                <div className="widget-content">
                                    <ul className="list-unstyled small d-flex flex-wrap gap-3 d-md-block">
                                        <li className="mb-2">
                                            <Link to="/" className="text-white-50 text-decoration-none hover:text-[var(--theme-color2)] transition-colors">Home</Link>
                                        </li>
                                        <li className="mb-2">
                                            <a href="#about" className="text-white-50 text-decoration-none hover:text-[var(--theme-color2)] transition-colors">About Us</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="#services" className="text-white-50 text-decoration-none hover:text-[var(--theme-color2)] transition-colors">Services</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="#contact" className="text-white-50 text-decoration-none hover:text-[var(--theme-color2)] transition-colors">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Footer Column - Contact */}
                        <div className="col-lg-3 col-md-6 col-sm-12 order-2 order-lg-3">
                            <div className="footer-widget contact-widget">
                                <h5 className="widget-title mb-3 fw-bold text-white">Contact Us</h5>
                                <div className="widget-content">
                                    <div className="text-white-50 mb-2 small"><i className="fas fa-map-marker-alt me-2 text-[var(--theme-color2)]"></i> Dubai, Sharjah, Ajman</div>
                                    <ul className="contact-info list-unstyled small">
                                        <li className="mb-2">
                                            <i className="fas fa-envelope me-2 text-[var(--theme-color2)]"></i>
                                            <Link to="mailto:support@itguy.ae" onClick={handleQuoteClick} className="text-white-50 text-decoration-none hover:text-[var(--theme-color2)] transition-colors">support@itguy.ae</Link>
                                        </li>
                                        <li className="mb-2">
                                            <i className="fas fa-phone-alt me-2 text-[var(--theme-color2)]"></i>
                                            <Link to="tel:+971588996975" onClick={handleQuoteClick} className="text-white-50 text-decoration-none hover:text-[var(--theme-color2)] transition-colors">+971 58 899 6975</Link>
                                        </li>
                                        <li className="mb-2">
                                            <i className="fas fa-clock me-2 text-[var(--theme-color2)]"></i>
                                            <span className="text-white-50">9:00 AM - 9:00 PM</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom py-3 bg-darker">
                <div className="auto-container text-center">
                    <div className="copyright-text small text-white-50">
                        &copy; {new Date().getFullYear()} <Link to="/" className="text-white text-decoration-none hover:text-[var(--theme-color2)]">itguy.ae</Link>. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterHomeOne;
