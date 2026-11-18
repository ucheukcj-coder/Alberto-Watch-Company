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
      "Citizen's Eco-Drive technology converts light into electrical energy, which is stored to power the watch. This reduces the need for regular battery replacements. ",
  },
  {
    title: "Eco-Drive Technology",
    description:
      "Citizen's Eco-Drive technology converts light into electrical energy, which is stored to power the watch. This reduces the need for regular battery replacements.",
  },
  {
    title: "Smartwatch Technology",
    description:
      "Smartwatches combine digital technology with traditional timekeeping. Depending on the model, they can offer smartphone connectivity, notifications, activity tracking and other useful features.",
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