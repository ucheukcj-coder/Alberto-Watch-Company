export default function SectionIntro({ eyebrow, title, description, id }) {
  return (
    <header className="section-intro" id={id}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className="section-title">{title}</h1>
      {description && <p className="section-description">{description}</p>}
    </header>
  );
}
