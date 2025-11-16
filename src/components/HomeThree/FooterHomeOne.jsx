import { Link } from 'react-router-dom';
import logo1 from "../../assets/images/logo3.png"
import Image1 from '../../assets/images/background/2.jpg';

import '@fortawesome/fontawesome-free/css/all.min.css';


function FooterHomeOne({ className }) {
    return (
        <footer className={`main-footer ${className || ''}`}>
            <div className="bg-image" style={{ backgroundImage: `url(${Image1})` }}></div>

            {/* Widgets Section */}
            <div className="widgets-section">
                <div className="auto-container w-100">
                    <div className="d-flex align-item-center justify-content-between flex-xl-row flex-column ">
                        {/* Footer Column - About */}
                        <div className="footer-column col-xl-3 col-lg-12 col-md-6 col-sm-12 ">
                            <div className="footer-widget about-widget">
                                <div className="logo">
                                    <Link to="/"><img src={logo1} alt="Logo" /></Link >
                                    <span className='text-sm ml-sm-90 ml-70   '>License No. 323886</span>
                                </div>
                                {/* <div className="text fs-5">To deliver the best reliable solution in IT infrastructures, security systems, ELV solutions,
                                    and help our clients to improve business efficiency.</div> */}
                                    <div className="text fs-5">Disclaimer !<br/>All solutions and installations are designed in accordance with SIRA standards and Dubai security regulations.<br/>
                                    
                                    </div>
                                {/* <ul className="social-icon-two">
                                    <li><Link  to="#"><i className="fab fa-twitter"></i></Link ></li>
                                    <li><Link  to="#"><i className="fab fa-facebook"></i></Link ></li>
                                    <li><Link  to="#"><i className="fab fa-pinterest"></i></Link ></li>
                                    <li><Link  to="#"><i className="fab fa-instagram"></i></Link ></li>
                                </ul> */}
                            </div>
                        </div>

                        {/* Footer Column - Explore */}
                        {/* <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="footer-widget">
                                <h3 className="widget-title">Explore</h3>
                                <ul className="user-Link s">
                                    <li><Link  to="#">About Company</Link ></li>
                                    <li><Link  to="#">Meet the Team</Link ></li>
                                    <li><Link  to="#">News & Media</Link ></li>
                                    <li><Link  to="#">Our Projects</Link ></li>
                                    <li><Link  to="#">Contact</Link ></li>
                                </ul>
                            </div>
                        </div> */}

                        {/* Footer Column - Contact */}
                        <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="footer-widget contact-widget">
                                <h3 className="widget-title  fs-3">Contact us</h3>
                                <div className="widget-content">
                                    <div className="text fs-5">Deira, Dubai, U.A.E.</div>
                                    <ul className="contact-info">
                                        <li><i className="fa fa-envelope"></i> <Link to="mailto:info@coralplus.ae">info@coralplus.ae</Link ></li>
                                        <li><i className="fa fa-phone-square"></i> <Link to="tel:+971588996975">+971588996975</Link >
                                            {/* <Link className='ml-10' to="tel:+971588838616">+971588838616</Link > */}
                                        </li>
                                        <li className=''><i className='fa fa-building '></i><p className='fs-6 text-white'>102-C4, Muteena, Deira, Dubai.</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <ul className="social-icon-two d-flex flex-row align-items-center justify-content-xl-between flex-xl-column">
                            <li><Link to="https://www.facebook.com/share/1G5YY3q2tS/?mibextid=wwXIfr"><i className="fab fa-facebook"></i></Link ></li>
                            <li><Link to="https://www.tiktok.com/@coralplus.ae?_t=ZS-8wJc6gWSPDh&_r=1"><i className="fab fa-tiktok"></i></Link></li>
                            <li><Link to="https://g.co/kgs/p5DpJ8q"><i className="fab fa-google"></i></Link></li>
                            <li><Link to="https://wa.me/971588996975"
                                target="_blank"
                                rel="noopener noreferrer"><i className="fab fa-whatsapp"></i>
                            </Link></li>
                        </ul>

                        {/* Footer Column - Gallery */}
                        {/* <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="footer-widget gallery-widget">
                                <h3 className="widget-title">Gallery</h3>
                                <div className="widget-content">
                                    <div className="outer clearfix">
                                        {[Portfolio1, Portfolio2, Portfolio3, Portfolio4, Portfolio5, Portfolio6].map((portfolio, index) => (
                                            <figure className="image" key={index}>
                                                <Link  to="#"><img src={portfolio} alt={`Portfolio ${index + 1}`} /></Link >
                                            </figure>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <MapSection /> */}
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom ">
                <div className="auto-container d-flex justify-content-center bg-transparent">
                    <div className="inner-container">
                        <div className="copyright-text">&copy; 2025 Coral Plus Security Systems LLC. All rights reserved. <Link to="/">coralplus.ae</Link ></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterHomeOne;
