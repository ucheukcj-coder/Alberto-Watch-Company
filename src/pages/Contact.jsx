import ContactForm from "../components/ContactForm.jsx";
import SectionIntro from "../components/SectionIntro.jsx";

export default function Contact() {
  return (
    <section className="page-section contact-section">
      <div className="content-width">
        <SectionIntro
          eyebrow="08 / At your service"
          title="Let’s talk time."
          description="For a collection enquiry, a repair or a professional appraisal, we’re here to help."
        />
        <div className="contact-layout">
          <div className="contact-copy">
            <p className="eyebrow">Personal service</p>
            <h2>How can we help?</h2>
            <p>
              Ask us about a timepiece, arrange an appraisal, or get advice on
              repairs and care.
            </p>
            <p className="contact-response-note">
              This demonstration form validates your enquiry but does not send it.
            </p>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
