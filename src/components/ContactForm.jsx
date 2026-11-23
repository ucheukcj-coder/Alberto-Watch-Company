import { useState } from "react";

export default function ContactForm() {
  const [feedback, setFeedback] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    setFeedback(
      "Your enquiry is complete. This demonstration form does not send messages.",
    );
    form.reset();
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="form-field">
        <span>Name</span>
        <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
      </label>
      <label className="form-field">
        <span>Email</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Your email"
          required
        />
      </label>
      <label className="form-field">
        <span>Subject</span>
        <input name="subject" type="text" placeholder="Your subject" required />
      </label>
      <label className="form-field">
        <span>Message</span>
        <textarea
          name="message"
          rows="5"
          placeholder="How can we help?"
          required
          minLength="10"
        />
      </label>
      <button className="button button-gold" type="submit">Submit demo enquiry</button>
      <p className="form-feedback" aria-live="polite" role="status">{feedback}</p>
    </form>
  );
}
