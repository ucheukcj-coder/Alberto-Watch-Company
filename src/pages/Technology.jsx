import SectionIntro from "../components/SectionIntro.jsx";

const technologies = [
  {
    title: "Automatic Movement",
    description:
      "Powered by your movement. An intricate mechanical calibre turns everyday motion into lasting precision.",
  },
  {
    title: "Quartz Movement",
    description:
      "A vibrating quartz crystal delivers remarkable accuracy with minimal maintenance.",
  },
  {
    title: "Eco-Drive Technology",
    description:
      "Light becomes energy. Citizen’s technology powers a watch without regular battery changes.",
  },
  {
    title: "Smartwatch Technology",
    description:
      "Intelligent features bring connectivity, activity insights and everyday convenience to your wrist.",
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