import React from 'react';
import { Link } from 'react-router-dom';

import AboutImage1 from '../../assets/images/resource/why-us-3.jpeg';
// import AboutImage2 from '../../assets/images/resource/about-10.jpg';
import AboutThumb from '../../assets/images/resource/thumb-1.jpg';
function AboutHomeThree({ className }) {
    return (
        <>
            <section className={`about-section-five pt-0 ${className || ''}`} id='about'>
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">About Our Company</span>
                                    <p><h2 className='fs-1'>IT INFRASTRUCTURES | SECURITY SYSTEMS |</h2><h2 className='fs-1'>ELV SOLUTIONS</h2></p>
                                    <div className="text">
                                        ITGuy.ae is a professional IT & security services brand licensed to provide IT infrastructure and security system installation & maintenance across Dubai, Sharjah, and Ajman.
                                        We focus on delivering reliable, efficient, and cost-effective solutions for residential, commercial, and retail customers.
                                    </div>
                                </div>

                                {/* <ul className="list-style-three">
                                    <li>The business applications</li>
                                    <li>The business applications</li>
                                    <li>Revolutionary catalysts for change</li>
                                    <li>Revolutionary catalysts for change</li>
                                    <li>Catalysts for change seamlessly</li>
                                    <li>Catalysts for change seamlessly</li>
                                </ul>

                                <div className="btn-box d-flex">
                                    <Link  to="/about-us" className="theme-btn btn-style-one">
                                        <span className="btn-title">get in touch</span>
                                    </Link >
                                    <div className="founder-info">
                                        <div className="thumb">
                                            <img src={AboutThumb} alt="" />
                                        </div>
                                        <h5 className="name">Kevin Martin</h5>
                                        <span className="designation">Co Founder</span>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <figure className="image-1 overlay-anim wow fadeInUp">
                                    <img className='' src={AboutImage1} alt="About 9"/>
                                </figure>
                                {/* <figure className="image-2 overlay-anim wow fadeInRight">
                                    <img src={AboutImage2} alt="About 10"/>
                                </figure> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutHomeThree;



