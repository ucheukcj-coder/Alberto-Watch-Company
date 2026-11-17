const questions = [
  {
    question: "Can you service my watch?",
    answer:
      "Our team can discuss servicing, repairs and appraisals. Send the brand, model and a description of the issue for an initial assessment.",
  },
  {
    question: "What warranty is included?",
    answer:
      "Warranty terms vary by watch and service. Confirm coverage, exclusions and documentation with our team before purchase.",
  },
  {
    question: "How should I care for my watch?",
    answer:
      "Wipe your watch with a soft cloth, avoid strong magnets and chemicals, and have water resistance checked before exposure to water.",
  },
  {
    question: "Can you help me choose a watch?",
    answer:
      "Absolutely. Tell us your preferences, budget and occasion, and we’ll guide you through suitable options.",
  },
];

export default function FaqList() {
  return (
    <div className="faq-grid">
      {questions.map(({ question, answer }) => (
        <details className="faq-item" key={question}>
          <summary>{question}</summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}
