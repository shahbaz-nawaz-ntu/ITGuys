import React, { useState } from 'react';

// Existing Imports

// Service Images Imports
import CCTVImg from '../../assets/images/service images/cctv-camera-installation-dubai.jpeg';
import AccessControlImg from '../../assets/images/service images/access-control-systems-dubai.jpg.jpeg';
import IntercomImg from '../../assets/images/service images/audio-video-intercom-systems-villa-office-dubai.jpeg';
import TelephoneImg from '../../assets/images/service images/office-telephone-systems-pabx-dubai.jpeg';
import AttendanceImg from '../../assets/images/service images/employee-time-attendance-system-machine-dubai.jpeg';
import SpeakerImg from '../../assets/images/service images/speaker-pa-systems-dubai.jpeg';
import LightFixingImg from '../../assets/images/service images/light-fixing-office-warehouse-dubai.jpeg';
import DrawingImg from '../../assets/images/service images/drawings-layout-design-svg-ssd-spc-mep-elv-dubai.jpeg';
import NetworkDesignImg from '../../assets/images/service images/WhatsApp Image 2025-12-17 at 11.20.47 PM.jpeg'; // Tentative
import StructuredCablingImg from '../../assets/images/service images/WhatsApp Image 2025-12-17 at 11.20.48 PM.jpeg'; // Tentative
import VoiceInfraImg from '../../assets/images/service images/WhatsApp Image 2025-12-17 at 11.20.49 PM.jpeg'; // Tentative
import ManagedITImg from '../../assets/images/service images/WhatsApp Image 2025-12-17 at 11.20.50 PM.jpeg'; // Tentative
import CybersecurityImg from '../../assets/images/service images/WhatsApp Image 2025-12-17 at 11.20.49 PM (1).jpeg'; // Tentative
import WebAppImg from '../../assets/images/service images/web-app-development-dubai.jpeg';
import AIImg from '../../assets/images/service images/ai-solutions-chatbot-virtual-assistant-automation-office-dubai.jpeg';
import SiraImg from '../../assets/images/service images/sira-approved-noc-dubai.jpeg';
import { FaWhatsapp } from "react-icons/fa";


function HomeThreegridService() {

  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const services = [
    {
      title: "SIRA APPROVALS & NOCs",
      subtitle: "Sira Approved & NOCs UAE Security System Certifications ",
      image: SiraImg,
      details: "We streamline the mandatory security regulatory requirements for businesses in Dubai. From initial license approvals to security system certifications, our experts ensure your facility meets SIRA (Security Industry Regulatory Agency) standards efficiently.",
      features: ["SIRA Approvals", "NOCs", "Security System Certifications", "Remote Mobile Viewing Setup", "AMC & Maintenance"],
      link: "https://wa.me/971588996975?text=Hello%2C+I+am+interested+in+SIRA+Approvals+services+from+ITGuy.ae.+Please+contact+me"
    },
    {
      title: "CCTV Camera Installation",
      subtitle: "Secure what matters most | reliable solutions | protect your premises today",
      image: CCTVImg,
      details: "We design and install CCTV surveillance systems for offices, warehouses, villas and commercial properties. Our solutions include IP cameras, analog cameras, NVR/DVR setup, remote mobile monitoring and complete system configuration.",
      features: ["Office CCTV Installation", "Villa & Building Surveillance", "IP & Analog Systems", "Remote Mobile Viewing Setup", "AMC & Maintenance"],
      link: "https://wa.me/971588996975?text=Hello%2C+I+am+interested+in+CCTV+Camera+Installation+services+from+ITGuy.ae.+Please+contact+me"
    },
    {
      title: "Access Control Systems",
      subtitle: "Smart Entry | Advance control | professional installation ",
      image: AccessControlImg,
      details: "Secure your office, warehouse or facility with smart access control solutions including card, biometric and face recognition systems.",
      features: ["Door Access Control Systems", "Biometric & Face Recognition", "Magnetic Lock Installation", "RFID Card & PIN Access"],
      link: "https://wa.me/971588996975?text=Hello%2C+I+want+to+inquire+about+Access+Control+System+installation.+Kindly+assist"
    },
    {
      title: "Intercom Systems",
      subtitle: "Know Who’s There Before You Open | Reliable Intercom Systems Installation ",
      image: IntercomImg,
      details: "Professional audio and video intercom systems for villas, offices and buildings. Seamless integration with gate and door access.",
      features: ["Audio & Video Intercom", "Villa Gate Intercom Systems", "Apartment Intercom Installation"],
      link: "https://wa.me/971588996975?text=Hi%2C+I+am+looking+for+Intercom+System+installation+services.+Please+share+details"
    },
    {
      title: "Office Telephone Systems",
      subtitle: "Clear Communication for Your Team | Modern Office Phone Solutions",
      image: TelephoneImg,
      details: "Installation of PABX, IP phone and VoIP systems for professional business communication.",
      features: ["PABX Installation", "IP Phone Systems", "SIP & VoIP Configuration"],
      link: "https://wa.me/971588996975?text=Hello%2C+I+need+Telephone+System+setup+for+my+office.+Please+advise"
    },
    {
      title: "Attendance Machine",
      subtitle: "Smart & accurate staff attendance | No more manual records",
      image: AttendanceImg,
      details: "Fingerprint, card and code-based attendance systems for accurate employee tracking.",
      features: ["Biometric Tracking", "Time Sheet Integration", "Access Logs"],
      link: "https://wa.me/971588996975?text=Hi%2C+I+am+interested+in+Attendance+Machine+installation.+Please+share+options+and+pricing"
    },
    {
      title: "Speaker & PA Systems",
      subtitle: "Announcements/background music | high quality sound clear audio",
      image: SpeakerImg,
      details: "Professional audio systems for offices, warehouses, schools and commercial spaces.",
      features: ["Public Address Systems", "Background Music Systems", "Warehouse Announcement Speakers"],
      link: "https://wa.me/971588996975?text=Hello%2C+please+provide+details+for+Speaker+System+installation+for+my+premises"
    },
    {
      title: "Light Fixing & Electrical",
      subtitle: "Safe, Efficient Electrical Solutions | Reliable Light & Wiring Installation",
      image: LightFixingImg,
      details: "Commercial lighting installation and power setup as part of office and IT infrastructure projects.",
      features: ["Office Lighting Installation", "Power Points & Electrical Wiring", "Electrical Layout Implementation"],
      link: "https://wa.me/971588996975?text=Hi%2C+I+need+assistance+with+Light+Fixing+and+Electrical+Support+for+my+office.+Please+contact+me"
    },
    {
      title: "Drawings & Layout Design",
      subtitle: "Autocad 2D, ELV, MEP, SVG, SSD, SPC and more with approvals",
      image: DrawingImg,
      details: "Professional layout planning, structured drawings and project documentation for office IT and security systems.",
      features: ["IT Infrastructure Layout Drawings", "Network Planning & Design", "Project Technical Documentation"],
      link: "https://wa.me/971588996975?text=Hello%2C+I+am+looking+for+Drawings+and+Layout+Design+services+for+my+upcoming+project.+Please+assist"
    },
    {
      title: "Network Design & Deployment",
      subtitle: "Router & Firewall Configuration | WiFi Network Deployment | Secure Networks",
      image: NetworkDesignImg,
      details: "Complete office and enterprise network design and deployment.",
      features: ["Router & Firewall Configuration", "WiFi Network Deployment", "Secure Corporate Networks"],
      link: "https://wa.me/971588996975?text=Hi%2C+I+need+Network+Design+and+Deployment+services+for+my+office.+Please+provide+more+information"
    },
    {
      title: "Structured Cabling",
      subtitle: "Cat6 / Cat6A Network Cabling | Fiber Optic Cabling | Patch Panels & Server Rack Setup",
      image: StructuredCablingImg,
      details: "Enterprise-grade data and voice cabling for corporate IT networks.",
      features: ["Cat6 / Cat6A Network Cabling", "Fiber Optic Cabling", "Patch Panels & Server Rack Setup"],
      link: "https://wa.me/971588996975?text=Hello%2C+I+am+interested+in+Structured+Cabling+services+for+my+office.+Kindly+share+details"
    },
    // {
    //   title: "Voice Infrastructure",
    //   image: VoiceInfraImg,
    //   details: "Deployment of internal communication and voice solutions integrated with your IT network.",
    //   features: ["Internal Comms", "Voice Integration"],
    //   link: "https://wa.me/971588996975?text=Hi%2C+I+want+to+know+more+about+Voice+Infrastructure+services+for+my+business.+Please+contact+me"
    // },
    {
      title: "Managed IT Services",
      subtitle: "AMC, Monitoring & Maintenance, Onsite & Remote expert Support",
      image: ManagedITImg,
      details: "Professional IT support and AMC services for long-term system management.",
      features: ["Annual Maintenance Contracts (AMC)", "Network Monitoring & Maintenance", "Onsite & Remote Support"],
      link: "https://wa.me/971588996975?text=Hello%2C+I+am+looking+for+Managed+IT+Services+for+my+business.+Please+provide+more+information"
    },
    {
      title: "Cybersecurity",
      subtitle: "Firewall Setup | Data Protection | Threat Analysis",
      image: CybersecurityImg,
      details: "Network security (firewalls, IDS/IPS), endpoint protection, and threat response.",
      features: ["Firewall Setup", "Data Protection", "Threat Analysis"],
      link: "https://wa.me/971588996975?text=Hi%2C+I+am+interested+in+Cybersecurity+services+for+my+business.+Please+share+details"
    },
    {
      title: "Web & App Development",
      subtitle: "Custom Website, React, Next.js & MERN Stack Apps | API Development & Integration",
      image: WebAppImg,
      details: "We design and develop modern, high-performance websites and mobile applications tailored to your business needs. From UX/UI design to backend development and deployment, we provide complete end-to-end digital solutions.",
      features: [
        "Custom Website Development",
        "React, Next.js & MERN Stack Apps",
        "iOS & Android Mobile Apps",
        "API Development & Integration",
        "E-commerce & CMS Solutions"
      ],
      link: "https://wa.me/971588996975?text=Hello%2C+I+am+interested+in+Web+and+App+Development+services+from+ITGuy.ae.+Please+contact+me"
    },
    {
      title: "AI Solutions",
      subtitle: "Chatbots & Virtual Assistants | Predictive Analytics & Automation Tools",
      image: AIImg,
      details: "We develop intelligent AI-powered solutions to automate workflows, enhance decision-making, and improve user experiences. Our services include chatbots, predictive models, automation tools, and custom AI integrations for businesses.",
      features: [
        "AI Chatbots & Virtual Assistants",
        "Predictive Analytics & Machine Learning Models",
        "Process Automation Tools",
        "AI Integration for Business Systems",
        "Data Extraction & Intelligent Insights"
      ],
      link: "https://wa.me/971588996975?text=Hello%2C+I+am+interested+in+AI+Solutions+from+ITGuy.ae.+Please+contact+me"
    },

  ];


  const handleQuoteClick = () => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "quote_button_click",
      });
    }
  };

  return (
    <section className="" id="services">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2">Our Services</h2>
          <p className="text-muted">
            Professional IT & Security Solutions <br /> tailored for your needs.
          </p>
        </div>

        <div className="row g-4 align-items-start">
          {services.map((service, i) => {
            return (
              <div className="col-12 col-md-6 col-lg-4" key={i}>
                <div
                  className="border rounded bg-white shadow-sm d-flex flex-column h-100"
                  style={{ transition: "all 0.3s ease", overflow: "hidden" }}
                >

                  {/* Top Image Section */}
                  <div className="w-100" style={{ height: "200px", overflow: "hidden" }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-4 d-flex flex-column flex-grow-1">
                    <div className="text-center mb-3">
                      <h5 className="fw-bold">{service.title}</h5>
                      <p className="text-muted">{service.subtitle}</p>
                    </div>

                    {/* Button Section */}
                    <div className="mt-auto d-flex justify-content-between align-items-center gap-2 pt-3">
                      {/* 1. View Details Button */}
                      <button
                        className="btn btn-sm btn-outline-primary flex-grow-1"
                        onClick={() => openModal(service)}
                      >
                        View Details
                      </button>

                      {/* 2. WhatsApp Link */}
                      <a
                        href={service.link}
                        className="btn btn-sm btn-success flex-grow-1 text-white d-flex align-items-center justify-content-center gap-2"
                        target="_blank"
                        onClick={handleQuoteClick}
                        rel="noopener noreferrer"
                      >
                        <FaWhatsapp />
                        <span>Inquire now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Implementation */}
        {selectedService && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{
              zIndex: 1050,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(5px)',
              padding: '10px' // Reduced padding for mobile
            }}
            onClick={closeModal}
          >
            <div
              className="bg-white rounded shadow-lg position-relative animate__animated animate__fadeInUp"
              style={{
                maxWidth: '600px',
                width: '100%',
                maxHeight: '90vh', // Limit height to 90% of viewport
                overflowY: 'auto', // Enable vertical scrolling
                display: 'flex',
                flexDirection: 'column'
              }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              {/* Close Button */}
              <button
                className="btn btn-close position-absolute top-0 end-0 m-3 z-3 bg-white p-2 shadow-sm"
                onClick={closeModal}
                aria-label="Close"
              ></button>

              {/* Modal Image */}
              <div className="w-100 flex-shrink-0" style={{ height: "250px", overflow: "hidden" }}>
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Modal Content */}
              <div className="p-4 p-md-5 overflow-auto">
                <h3 className="fw-bold mb-3">{selectedService.title}</h3>
                <p className="text-muted mb-4">{selectedService.details}</p>

                {selectedService.features && selectedService.features.length > 0 && (
                  <div className="mb-4">
                    <h6 className="fw-bold mb-2">Key Features:</h6>
                    <ul className="list-unstyled">
                      {selectedService.features.map((feature, idx) => (
                        <li key={idx} className="mb-2 d-flex align-items-center text-muted">
                          <i className="bi bi-check-circle-fill text-primary me-2 small"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="d-grid gap-2 mt-4">
                  <a
                    href={selectedService.link}
                    className="btn btn-success btn-lg text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleQuoteClick}
                  >
                    <i className="bi bi-whatsapp me-2"></i>
                    Contact via WhatsApp
                  </a>
                  {/* <button className="btn btn-outline-secondary" onClick={closeModal}>
                    Close
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );

}

export default HomeThreegridService;