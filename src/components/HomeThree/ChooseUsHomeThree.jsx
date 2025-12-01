import React, { useState } from 'react';
import CounterUp from '../../lib/CounterUp.jsx';
import ModalVideo from 'react-modal-video';
import Image6 from '../../assets/images/resource/why-us-3.jpeg';
function ChooseUs() {
    const [isOpen, setOpen] = useState(false);
    const skill1 = 86;
    const skill2 = 77;

    return (
        <>
            <section className="why-choose-us-two pt-0" 
            // style={{ background: 'rgba(0,0,0,0.5)', color: '#fff' }}
            >
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 wow fadeInLeft">
                            <div className="inner-column wow fadeInLeft">
                                <div className="sec-title">
                                    <span className="sub-title">Why choose our company</span>
                                    <h2>Why you Should Choose Our Services?</h2>
                                    <div className="text">
                                        <div className="row g-3 mb-3">
                                            <div className="col-12 col-md-6">
                                                <h6 className="mb-2">Why choose us</h6>
                                                <ul className="list-unstyled">
                                                    <li className="d-flex align-items-start mb-2">
                                                        <i className="fa fa-check-circle me-2 mt-1" style={{ color: '#87B73E' }} aria-hidden="true"></i>
                                                        <span>Experience delivering corporate and enterprise-level projects</span>
                                                    </li>
                                                    <li className="d-flex align-items-start mb-2">
                                                        <i className="fa fa-check-circle me-2 mt-1" style={{ color: '#87B73E' }} aria-hidden="true"></i>
                                                        <span>Professional team with clean installation standards</span>
                                                    </li>
                                                    <li className="d-flex align-items-start mb-2">
                                                        <i className="fa fa-check-circle me-2 mt-1" style={{ color: '#87B73E' }} aria-hidden="true"></i>
                                                        <span>Use of high-quality equipment and best practices</span>
                                                    </li>
                                                    <li className="d-flex align-items-start mb-2">
                                                        <i className="fa fa-check-circle me-2 mt-1" style={{ color: '#87B73E' }} aria-hidden="true"></i>
                                                        <span>Reliable after-sales and maintenance support</span>
                                                    </li>
                                                    <li className="d-flex align-items-start mb-2">
                                                        <i className="fa fa-check-circle me-2 mt-1" style={{ color: '#87B73E' }} aria-hidden="true"></i>
                                                        <span>Fast response across Dubai</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-12 col-md-6">
                                                <h6 className="mb-2">We provide services for</h6>
                                                <ul className="list-unstyled">
                                                    <li className="d-flex align-items-start mb-2">
                                                        <i className="fa fa-building me-2 mt-1" style={{ color: '#87B73E' }} aria-hidden="true"></i>
                                                        <span>Corporate Offices</span>
                                                    </li>
                                                    <li className="d-flex align-items-start mb-2">
                                                        <i className="fa fa-industry me-2 mt-1" style={{ color: '#87B73E' }} aria-hidden="true"></i>
                                                        <span>Commercial Buildings</span>
                                                    </li>
                                                    <li className="d-flex align-items-start mb-2">
                                                        <i className="fa fa-shopping-cart me-2 mt-1" style={{ color: '#87B73E' }} aria-hidden="true"></i>
                                                        <span>Retail Stores</span>
                                                    </li>
                                                    <li className="d-flex align-items-start mb-2">
                                                        <i className="fa fa-warehouse me-2 mt-1" style={{ color: '#87B73E' }} aria-hidden="true"></i>
                                                        <span>Warehouses &amp; Factories</span>
                                                    </li>
                                                    <li className="d-flex align-items-start mb-2">
                                                        <i className="fa fa-hospital-o me-2 mt-1" style={{ color: '#87B73E' }} aria-hidden="true"></i>
                                                        <span>Hospitals &amp; Clinics</span>
                                                    </li>
                                                    <li className="d-flex align-items-start mb-2">
                                                        <i className="fa fa-university me-2 mt-1" style={{ color: '#87B73E' }} aria-hidden="true"></i>
                                                        <span>Educational Institutes</span>
                                                    </li>
                                                    <li className="d-flex align-items-start mb-2">
                                                        <i className="fa fa-home me-2 mt-1" style={{ color: '#87B73E' }} aria-hidden="true"></i>
                                                        <span>Villas &amp; Residential Communities</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <p className="text-muted mb-0">
                                            We offer trusted IT and security installation services, delivering professional and fully compliant solutions.
                                            Our certified technicians are highly skilled in ELV and IT systems, providing same-day service across Dubai, Sharjah, and Ajman.
                                            We use only high-quality materials, including long-life cables, strong brackets, and reliable devices.
                                            To ensure long-term support, we provide 24/7 after-service with online troubleshooting and regular maintenance.
                                            All our services come with competitive pricing, transparent quotations, and full warranty.
                                        </p>
                                        {/* All Kinds of Approvals related to our system from Govt agencies without any delay or
                                        any risk to the clients. */}
                                        {/* We view ourselves as a vital part of each of our client’s teams and know our success
                                        hinges on them being successful. We have worked with many of our clients for years and
                                        attribute our high client retention rate to our response to their needs and consistent dedication
                                        to the iron ging success by monitoring their premises, offices, employees, students, staff, etc... */}
                                    </div>
                                </div>

                                {/* Info Boxes */}
                                {/* <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="info-box">
                                            <i className="icon fa fa-check-circle"></i>
                                            <h6 className="title">Integer et massa sit</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="info-box">
                                            <i className="icon fa fa-check-circle"></i>
                                            <h6 className="title">Integer et massa sit</h6>
                                        </div>
                                    </div>
                                </div> */}

                                {/* Skills Section */}
                                {/* <div className="skills">
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h6 className="skill-title">Technology</h6>
                                        </div>
                                        <div className="skill-bar">
                                            <div className="bar-inner">
                                                <div className="bar progress-line" style={{ width: '86%' }}>
                                                    <div className="skill-percentage">
                                                        <div className="count-box">
                                                            <span className="count-text"><CounterUp count={skill1} time={3} /></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h6 className="skill-title">Solutions</h6>
                                        </div>
                                        <div className="skill-bar">
                                            <div className="bar-inner">
                                                <div className="bar progress-line" style={{ width: '77%' }}>
                                                    <div className="skill-percentage">
                                                        <div className="count-box">
                                                            <span className="count-text"><CounterUp count={skill2} time={3} /></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                            <div className="">
                                <figure className="mb-0" style={{ marginBottom: 0 }}>
                                            <img src={Image6} alt="Why Choose Us" className="w-100 d-block" style={{ display: 'block' }} />
                                    {/* <a onClick={() => setOpen(true)} className="play-btn lightbox-image">
                                        <i className="icon fa fa-play"></i>
                                    </a> */}
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {/* <ModalVideo
                channel='youtube'
                autoplay
                isOpen={isOpen}
                videoId="Fvae8nxzVz4" // YouTube video ID
                onClose={() => setOpen(false)}
            /> */}
        </>
    );
}

export default ChooseUs;
