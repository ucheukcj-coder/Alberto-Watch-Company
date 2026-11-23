import SectionIntro from "../components/SectionIntro.jsx";

const technologies = [
  {
    title: "Automatic Movement",
    description:
      "An automatic watch uses the movement of your wrist to rotate an internal rotor, which winds the mainspring. The mainspring stores energy and gradually releases it to power the watch. If left unworn for too long, the watch may stop.",
  },
  {
    title: "Quartz Movement",
    description:
      "A quartz crystal regulates an electronic oscillator to keep time with impressive accuracy. Quartz watches are reliable, easy to maintain and ready for everyday wear.",
  },
  {
    title: "Eco-Drive Technology",
    description:
      "Citizen Eco-Drive watches convert light into energy and store it to power the movement, reducing the need for routine battery changes.",
  },
  {
    title: "Smartwatch Technology",
    description:
      "Smartwatches combine digital technology with traditional timekeeping. Depending on the model, they can offer smartphone connectivity, notifications, activity tracking and other useful features.",
  },
  {
    title: "Watch Repair & Restoration",
    description:
      "Our certified watchmakers provide complete repair services — from battery replacements and crystal changes to full movement overhauls and vintage restoration. Every repair comes with a warranty.",
  },
  {
    title: "Professional Appraisal",
    description:
      "Get accurate valuations for insurance, estate, or resale purposes. Our GIA-trained specialists provide documented appraisals with photographs and detailed descriptions for any timepiece.",
  },
  {
    title: "Custom Strap & Bracelet Service",
    description:
      "Choose from our curated selection of leather, rubber, fabric, and metal straps — or commission a custom-made strap. We offer professional fitting and adjustment on-site.",
  },
  {
    title: "Water Resistance Testing",
    description:
      "Pressure-test your watch to its rated depth with our state-of-the-art equipment. Annual testing recommended for watches worn in water. Certification provided with every test.",
  },
];

export default function Technology() {
  return (
    <section className="page-section feature-section">
      <div className="content-width">
        <SectionIntro eyebrow="03 / Beneath the dial" title="The art of precision." />
        <div className="feature-grid">
          {technologies.map(({ title, description }) => (
            <article className="feature-card" key={title}>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
