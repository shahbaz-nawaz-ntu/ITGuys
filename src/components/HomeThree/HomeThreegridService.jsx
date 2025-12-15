import React, { useState } from 'react';

// Existing Imports
import CCTV from "../../assets/images/Service Icon/CCTV.png";
import AccessControl from '../../assets/images/Service Icon/AccessControl.png';
import Intercom from '../../assets/images/Service Icon/Intercom.png';
import TelephonSystem from '../../assets/images/Service Icon/TelephonSystem.png';
import Attendance from '../../assets/images/Service Icon/Attendance.png';
import Speaker from '../../assets/images/Service Icon/Speaker.png';
import LightsFixing from '../../assets/images/Service Icon/LightsFixing.png';
import Drawing from '../../assets/images/Service Icon/Drawing.png';

// NEW Imports
import DataServices from '../../assets/images/Service Icon/DataServices.png';
import Cybersecurity from '../../assets/images/Service Icon/Cybersecurity.png';
import NetworkDesign from '../../assets/images/Service Icon/NetworkDesign.png';
import StructuredCabling from '../../assets/images/Service Icon/StructuredCabling.png';
import VoiceInfra from '../../assets/images/Service Icon/VoiceInfra.png';
import ManagedIT from '../../assets/images/Service Icon/ManagedIT.png';
import WebApp from "../../assets/images/Service Icon/web&app.png"
import AI from "../../assets/images/Service Icon/AI.png"

function HomeThreegridService() {

  const [activeServiceIndex, setActiveServiceIndex] = useState(null);

  const toggleService = (index) => {
    setActiveServiceIndex(activeServiceIndex === index ? null : index);
  };

  const services = [
    {
      title: "CCTV Camera Installation",
      icon: CCTV,
      details: "We design and install CCTV surveillance systems for offices, warehouses, villas and commercial properties. Our solutions include IP cameras, analog cameras, NVR/DVR setup, remote mobile monitoring and complete system configuration.",
      features: ["Office CCTV Installation", "Villa & Building Surveillance", "IP & Analog Systems", "Remote Mobile Viewing Setup", "AMC & Maintenance"],
      link: "https://wa.me/971588996975?text=Hello%2C+I+am+interested+in+CCTV+Camera+Installation+services+from+ITGuy.ae.+Please+contact+me"
    },
    {
      title: "Access Control Systems",
      icon: AccessControl,
      details: "Secure your office, warehouse or facility with smart access control solutions including card, biometric and face recognition systems.",
      features: ["Door Access Control Systems", "Biometric & Face Recognition", "Magnetic Lock Installation", "RFID Card & PIN Access"],
      link: "https://wa.me/971588996975?text=Hello%2C+I+want+to+inquire+about+Access+Control+System+installation.+Kindly+assist"
    },
    {
      title: "Intercom Systems",
      icon: Intercom,
      details: "Professional audio and video intercom systems for villas, offices and buildings. Seamless integration with gate and door access.",
      features: ["Audio & Video Intercom", "Villa Gate Intercom Systems", "Apartment Intercom Installation"],
      link: "https://wa.me/971588996975?text=Hi%2C+I+am+looking+for+Intercom+System+installation+services.+Please+share+details"
    },
    {
      title: "Office Telephone Systems",
      icon: TelephonSystem,
      details: "Installation of PABX, IP phone and VoIP systems for professional business communication.",
      features: ["PABX Installation", "IP Phone Systems", "SIP & VoIP Configuration"],
      link: "https://wa.me/971588996975?text=Hello%2C+I+need+Telephone+System+setup+for+my+office.+Please+advise"
    },
    {
      title: "Attendance Machine",
      icon: Attendance,
      details: "Fingerprint, card and code-based attendance systems for accurate employee tracking.",
      features: ["Biometric Tracking", "Time Sheet Integration", "Access Logs"],
      link: "https://wa.me/971588996975?text=Hi%2C+I+am+interested+in+Attendance+Machine+installation.+Please+share+options+and+pricing"
    },
    {
      title: "Speaker & PA Systems",
      icon: Speaker,
      details: "Professional audio systems for offices, warehouses, schools and commercial spaces.",
      features: ["Public Address Systems", "Background Music Systems", "Warehouse Announcement Speakers"],
      link: "https://wa.me/971588996975?text=Hello%2C+please+provide+details+for+Speaker+System+installation+for+my+premises"
    },
    {
      title: "Light Fixing & Electrical",
      icon: LightsFixing,
      details: "Commercial lighting installation and power setup as part of office and IT infrastructure projects.",
      features: ["Office Lighting Installation", "Power Points & Electrical Wiring", "Electrical Layout Implementation"],
      link: "https://wa.me/971588996975?text=Hi%2C+I+need+assistance+with+Light+Fixing+and+Electrical+Support+for+my+office.+Please+contact+me"
    },
    {
      title: "Drawings & Layout Design",
      icon: Drawing,
      details: "Professional layout planning, structured drawings and project documentation for office IT and security systems.",
      features: ["IT Infrastructure Layout Drawings", "Network Planning & Design", "Project Technical Documentation"],
      link: "https://wa.me/971588996975?text=Hello%2C+I+am+looking+for+Drawings+and+Layout+Design+services+for+my+upcoming+project.+Please+assist"
    },
    {
      title: "Network Design & Deployment",
      icon: NetworkDesign,
      details: "Complete office and enterprise network design and deployment.",
      features: ["Router & Firewall Configuration", "WiFi Network Deployment", "Secure Corporate Networks"],
      link: "https://wa.me/971588996975?text=Hi%2C+I+need+Network+Design+and+Deployment+services+for+my+office.+Please+provide+more+information"
    },
    {
      title: "Structured Cabling",
      icon: StructuredCabling,
      details: "Enterprise-grade data and voice cabling for corporate IT networks.",
      features: ["Cat6 / Cat6A Network Cabling", "Fiber Optic Cabling", "Patch Panels & Server Rack Setup"],
      link: "https://wa.me/971588996975?text=Hello%2C+I+am+interested+in+Structured+Cabling+services+for+my+office.+Kindly+share+details"
    },
    {
      title: "Voice Infrastructure",
      icon: VoiceInfra,
      details: "Deployment of internal communication and voice solutions integrated with your IT network.",
      features: ["Internal Comms", "Voice Integration"],
      link: "https://wa.me/971588996975?text=Hi%2C+I+want+to+know+more+about+Voice+Infrastructure+services+for+my+business.+Please+contact+me"
    },
    {
      title: "Managed IT Services",
      icon: ManagedIT,
      details: "Professional IT support and AMC services for long-term system management.",
      features: ["Annual Maintenance Contracts (AMC)", "Network Monitoring & Maintenance", "Onsite & Remote Support"],
      link: "https://wa.me/971588996975?text=Hello%2C+I+am+looking+for+Managed+IT+Services+for+my+business.+Please+provide+more+information"
    },
    {
      title: "Cybersecurity",
      icon: Cybersecurity,
      details: "Network security (firewalls, IDS/IPS), endpoint protection, and threat response.",
      features: ["Firewall Setup", "Data Protection", "Threat Analysis"],
      link: "https://wa.me/971588996975?text=Hi%2C+I+am+interested+in+Cybersecurity+services+for+my+business.+Please+share+details"
    },
    {
      title: "Web & App Development",
      icon: WebApp,
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
      icon: AI,
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

  return (
    <section className="" id="services">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2">Our Services</h2>
          <p className="text-muted">
            Professional IT & Security Solutions <br /> tailored for your needs.
          </p>
        </div>

        {/* FIX 1: Added 'align-items-start'. 
          This prevents the row from stretching all columns to the same height 
        */}
        <div className="row g-4 align-items-start">
          {services.map((service, i) => {
            const isOpen = activeServiceIndex === i;

            return (
              <div className="col-12 col-md-6 col-lg-4 " key={i}>
                {/* FIX 2: Removed 'h-100'. 
                  FIX 3: Added 'minHeight: 280px' so they look uniform when closed. 
                */}
                <div
                  className={`p-4 border rounded bg-white shadow-sm d-flex flex-column ${isOpen ? 'border-primary' : ''}`}
                  style={{ minHeight: "280px", transition: "all 0.3s ease" }}
                >

                  {/* Top Section */}
                  <div className="text-center mb-3">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="img-fluid mb-3"
                      style={{ maxWidth: "70px", height: "auto" }}
                    />
                    <h5 className="fw-bold">{service.title}</h5>
                  </div>



                  {/* Details Section */}
                  {isOpen && (
                    <div className="mb-4 pt-3 border-top text-start animate__animated animate__fadeIn">
                      <p className="text-muted small mb-3">
                        {service.details}
                      </p>

                      {service.features && service.features.length > 0 && (
                        <ul className="text-muted small ps-3 mb-0">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="mb-1">{feature}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}


                  {/* Button Section */}
                  <div className="mt-auto d-flex justify-content-center align-items-center gap-2">
                    {/* 1. Toggle Button */}
                    <button
                      className={`btn btn-sm rounded-pill px-4 ${isOpen ? 'btn-outline-danger' : 'btn-outline-primary'}`}
                      onClick={() => toggleService(i)}
                    >
                      {isOpen ? "Close Details" : "View Details"}
                    </button>

                    {/* 2. WhatsApp Link - Only renders if isOpen is true */}
                    {isOpen && (
                      <a
                        href={service.link}
                        className="btn btn-sm btn-outline-success rounded-pill px-4"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Contact via WhatsApp
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );

}

export default HomeThreegridService;