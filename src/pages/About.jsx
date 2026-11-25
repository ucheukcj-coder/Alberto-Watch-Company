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
          title="More than a watch. A story that lasts."
          description="A watch is personal. It marks a milestone, carries a memory and becomes part of your story."
        />
        <div className="editorial-layout">
          <div className="editorial-copy">
            <p>
             It began with a simple fascination — not just with watches, but with what they represent. Every second carries a moment, every moment becomes a memory, and every watch tells a story beyond the hands on its dial.

Our journey started with a small collection, a curiosity for timeless design, and a belief that a great watch should mean more than simply telling time. We spent years exploring craftsmanship, studying the details, and searching for the perfect balance between elegance, precision, and character.

Over time, that passion evolved into something greater. We set out to create a collection for people who value the moments that matter — those who appreciate quiet confidence, lasting quality, and design that never needs to chase trends.

Today, our watches are inspired by the past, designed for the present, and made to accompany the moments that shape your future.

Time moves forward. Style stays timeless.
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