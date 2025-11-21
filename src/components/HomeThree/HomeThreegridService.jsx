import React from 'react'

function HomeThreegridService() {

    const services = [
  {
    title: "CCTV Camera Installation",
    description: "Professional surveillance camera setup for your property",
    icon: "/your-icon-path-here.png",
  },
  {
    title: "Access Control",
    description: "Secure door access solutions for buildings and gateways",
    icon: "/your-icon-path-here.png",
  },
  {
    title: "Intercom",
    description: "Audio and video entry systems for homes and businesses",
    icon: "/your-icon-path-here.png",
  },
  {
    title: "Telephone Systems",
    description: "PABX and VoIP telephone solutions for offices",
    icon: "/your-icon-path-here.png",
  },
  {
    title: "Attendance Machine",
    description: "Fingerprint, card and code-based attendance systems",
    icon: "/your-icon-path-here.png",
  },
  {
    title: "Speaker System",
    description: "Public address and speaker system installations",
    icon: "/your-icon-path-here.png",
  },
  {
    title: "Lights Fixing",
    description: "Electrical lighting solutions for shops, offices, and homes",
    icon: "/icons/lights-fixing.png", // replace with your icon
  },
  {
    title: "Drawings/Layout",
    description: "ELV, MEP, SSD, SPC, and SVG drawings/plans",
    icon: "/icons/drawings.png", // replace with your icon
  },
];

  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-2">Our Services</h2>
        <p className="text-muted mb-5">
          Professional IT & Security Services for Homes and Businesses
        </p>

        <div className="row g-4">
          {services.map((service, i) => (
            <div className="col-12 col-md-6" key={i}>
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

export default HomeThreegridService
