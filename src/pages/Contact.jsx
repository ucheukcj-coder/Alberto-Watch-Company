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
            <h2>A considered conversation.</h2>
            <p>Tell us what you’re looking for. We’ll help with the details.</p>
            <p><span>Email</span> · To be added</p>
            <p><span>Phone</span> · To be added</p>
            <p><span>Address</span> · To be confirmed</p>
          </div>
          <div>
            <ContactForm />
            <p className="form-note">
              Demonstration form. Enquiry delivery will be enabled when a business email is provided.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}