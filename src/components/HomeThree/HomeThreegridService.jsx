// Existing Imports
import CCTV from "../../assets/images/Service Icon/CCTV.png";
import AccessControl from '../../assets/images/Service Icon/AccessControl.png';
import Intercom from '../../assets/images/Service Icon/Intercom.png';
import TelephonSystem from '../../assets/images/Service Icon/TelephonSystem.png';
import Attendance from '../../assets/images/Service Icon/Attendance.png';
import Speaker from '../../assets/images/Service Icon/Speaker.png';
import LightsFixing from '../../assets/images/Service Icon/LightsFixing.png';
import Drawing from '../../assets/images/Service Icon/Drawing.png';

// NEW Imports (Make sure these image files exist in your folder)
// You may need to rename your image files to match these, or change these names
import DataServices from '../../assets/images/Service Icon/DataServices.png';
import Cybersecurity from '../../assets/images/Service Icon/Cybersecurity.png';
import NetworkDesign from '../../assets/images/Service Icon/NetworkDesign.png';
import StructuredCabling from '../../assets/images/Service Icon/StructuredCabling.png';
import VoiceInfra from '../../assets/images/Service Icon/VoiceInfra.png';
import ManagedIT from '../../assets/images/Service Icon/ManagedIT.png';

function HomeThreegridService() {

  const services = [
    // --- Original Services ---
    {
      title: "CCTV Camera Installation",
      description: "Professional surveillance camera setup for your property",
      icon: CCTV,
    },
    {
      title: "Access Control",
      description: "Secure door access solutions for buildings and gateways",
      icon: AccessControl,
    },
    {
      title: "Intercom",
      description: "Audio and video entry systems for homes and businesses",
      icon: Intercom,
    },
    {
      title: "Telephone Systems",
      description: "PABX and VoIP telephone solutions for offices",
      icon: TelephonSystem,
    },
    {
      title: "Attendance Machine",
      description: "Fingerprint, card and code-based attendance systems",
      icon: Attendance,
    },
    {
      title: "Speaker System",
      description: "Public address and speaker system installations",
      icon: Speaker,
    },
    {
      title: "Lights Fixing",
      description: "Electrical lighting solutions for shops, offices, and homes",
      icon: LightsFixing,
    },
    {
      title: "Drawings/Layout",
      description: "ELV, MEP, SSD, SPC, and SVG drawings/plans",
      icon: Drawing,
    },

    // --- New Services from Images ---
    {
      title: "Data Services",
      description: "Data backup, disaster recovery, cloud services (Azure, AWS), and data center management.",
      icon: DataServices,
    },
    {
      title: "Cybersecurity",
      description: "Network security (firewalls, IDS/IPS), endpoint protection, and threat response.",
      icon: Cybersecurity,
    },
    {
      title: "Network Design & Deployment",
      description: "LAN design, Wi-Fi setup, enterprise networking, and SD-WAN solutions.",
      icon: NetworkDesign,
    },
    {
      title: "Structured Cabling",
      description: "Voice, data, and fiber cabling planning and installation for offices.",
      icon: StructuredCabling,
    },
    {
      title: "Voice Infrastructure (Telephony)",
      description: "VoIP/IP-PBX setup, IVR systems, call recording, and telephone cabling.",
      icon: VoiceInfra,
    },
    {
      title: "Managed IT Services",
      description: "24/7 IT support (onsite & remote), infrastructure outsourcing, and consultancy.",
      icon: ManagedIT,
    },
  ];

  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-2">Our Services</h2>
        <p className="text-muted mb-5">
          Professional IT & Security Services <br /> for Homes and Businesses
        </p>

        <div className="row g-4">
          {services.map((service, i) => (
            <div className="col-12 col-md-6" key={i} id={service.title.replace(/\s+/g, '-').toLowerCase()}>
              <div className="p-4 border rounded bg-white h-100 shadow-sm">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="img-fluid mb-3"
                  style={{ maxWidth: "80px" }}
                />
                <h5 className="fw-bold">{service.title}</h5>
                <p className="text-muted">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );

}

export default HomeThreegridService;