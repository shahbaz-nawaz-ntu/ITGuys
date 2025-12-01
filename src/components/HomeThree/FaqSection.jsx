import React, { useState } from 'react';

function FaqSection() {
  // State to track which question is currently open
  // If you want them all closed by default, set this to null
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Q1. Do you provide home and office CCTV installation in Dubai?",
      answer: "Yes. We install CCTV systems for homes, villas, apartments, offices, warehouses, and shops. Our solutions include complete wiring, NVR/DVR setup, and mobile app configuration."
    },
    {
      question: "Q2. Do I need SIRA approval for CCTV installation?",
      answer: "For villas, small offices, shops, and normal commercial spaces — no SIRA approval is required. Only high-risk categories (banks, hotels, warehouses above certain capacity) require SIRA-certified contractors."
    },
    {
      question: "Q3. How fast can you install the system?",
      answer: "Most installations are completed within the same day depending on the size of the job and location."
    },
    {
      question: "Q4. Do you provide warranty on installation?",
      answer: "Yes. We provide installation warranty and optional annual maintenance packages for CCTV and IT systems."
    },
    {
      question: "Q5. What areas do you cover?",
      answer: "We serve Dubai, Sharjah, and Ajman. Additional emirates upon request."
    },
    {
      question: "Q6. Do you offer maintenance and repair?",
      answer: "Yes. We troubleshoot cameras, access systems, intercoms, attendance machines, PABX systems, speakers, and networking issues."
    },
    {
      question: "Q7. Can you prepare ELV drawings for approval or contractors?",
      answer: "Yes. We prepare CCTV, access control, MEP, and cable-routing drawings for consultants, contractors, and commercial projects."
    },
    {
      question: "Q8. What payment methods do you accept?",
      answer: "We accept cash, bank transfers, and online payments."
    },
    {
      question: "Q9. Are you a registered company?",
      answer: "ITGuy.ae is a service brand of Manam Trading (FZC), licensed under Sharjah Research Technology & Innovation Park. License No. SC242015901. Authorized to provide IT Infrastructure and Security/Surveillance System Installation & Maintenance."
    }
  ];

  // Function to handle click
  const toggleFAQ = (index) => {
    // If clicking the already open item, close it (set to null)
    // Otherwise, open the clicked item
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-5 bg-light" id="faq">
      <div className="container">
        
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2">Frequently Asked Questions</h2>
          <p className="text-muted">
             Got questions? We have answers.
          </p>
        </div>

        {/* Constrain width so it looks good on large screens (col-lg-8) */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            
            <div className="accordion-list">
              {faqData.map((item, index) => (
                <div key={index} className="card border-0 mb-3 shadow-sm">
                  
                  {/* Clickable Header */}
                  <div 
                    className="card-header bg-white p-3 d-flex justify-content-between align-items-center"
                    style={{ cursor: "pointer" }}
                    onClick={() => toggleFAQ(index)}
                  >
                    <h6 className="mb-0 fw-bold text-dark">
                      {item.question}
                    </h6>
                    {/* Simple Plus/Minus toggle */}
                    <span className="fw-bold fs-5 text-primary">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </div>

                  {/* Expandable Body */}
                  {openIndex === index && (
                    <div className="card-body border-top">
                      <p className="text-muted mb-0">
                        {item.answer}
                      </p>
                    </div>
                  )}
                  
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default FaqSection;