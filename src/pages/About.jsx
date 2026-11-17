import { Link } from "react-router-dom";
import SectionIntro from "../components/SectionIntro.jsx";

const aboutImage =
  "https://framerusercontent.com/images/J89DJWQlrQpIqGY0doVSAeFk.jpg?scale-down-to=1024&width=1200&height=800";

export default function About() {
  return (
    <section className="page-section editorial-section">
      <div className="content-width">
        <SectionIntro
          eyebrow="04 / Our philosophy"
          title="More than time. It’s a statement."
          description="A watch is personal. It marks a milestone, carries a memory and becomes part of your story."
        />
        <div className="editorial-layout">
          <div className="editorial-copy">
            <p>
              At Alberto Watch Company, we bring together carefully selected luxury
              timepieces, attentive repair services and professional appraisals. From your
              first watch to a treasured heirloom, we help you choose well and care for it
              beautifully.
            </p>
            <Link className="button button-gold" to="/contact">Learn More</Link>
          </div>
          <img
            className="editorial-image"
            src={aboutImage}
            alt="Watchmaking detail representing Alberto's care and craftsmanship"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}