import React, { useState } from "react";

function MorePage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "Where is Rooted in Speech, LLC based out of?",
      a: "We offer Rooted in Speech, LLC is a small business located in Canton, MI providing home-based services to the surrounding area. Services are mostly provided in the home, as children perform their best when in their natural environment. speech therapy services including articulation, fluency, and social communication training.Other options include meeting at a public library if it is appropriate for the child or the Macani room at Medina Activity Center (MAC) on weekday afternoons and weekends, subject to availability."
    },
    {
      q: "How do I pay?",
      a: "Children At this time, Rooted in Speech, LLC is private pay only. Payment can be made through cash or Zelle, and payment is due at the time of service."
    },
    {
      q: "How much does it cost?",
      a: "StandardThe rate is $85 for 60 minute sessions and $55 for 30 minute sessions, if the client resides within 15 minutes of the 48187 area code. The SLP travelling distances 15-30 minutes away results in a rate of $95 for 60 minutes and $60 for 30 minutes. (~10% charge for travel) We also have the option of meeting in the Macani room at Medina Activity Center (MAC) at the rate of $95 for 60 minutes and $60 for 30 minutes."
    },
    {
      q: "Why is it only private pay? Can I use my insurance?",
      a: "Yes, Rooted in Speech, LLC is committed to providing affordable speech therapy without having to conform to insurance companies’ standards. Eliminating insurance removes the risk of being denied speech therapy because the child does not fit the insurance company’s requirements, insurance will not dictate a maximum number of speech therapy sessions in a year, and no surprise co-pays. Insurance may be added as an option in the future; however, billing through insurance is not available at this time."
    },
    {
      q: "How do I know my child requires speech therapy?",
      a: "There are developmental guidelines outlined by the American Speech-Language-Hearing Association (ASHA) according to the age of the child. If a child is struggling in the classroom with comprehension, being understood by others, or expressing themselves effectively, it is encouraged to be evaluated by a speech-language pathologist."
    }
  ];

  return (
    <div className="more-page active">
      <h2 className="more-title">FREQUENTLY ASKED QUESTIONS</h2>
      <div className="faq-container">
  {faqs.map((faq, i) => (
    <div
      className={`faq-item ${openIndex === i ? "active" : ""}`}
      key={i}
    >
      <div
        className="faq-question"
        onClick={() => toggleFAQ(i)}
      >
        {faq.q}
        <span className="arrow">{openIndex === i ? "▲" : "▼"}</span>
      </div>
      <div className="faq-answer">
        {faq.a}
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

export default MorePage;
