import { Link } from "react-router-dom";
import SectionIntro from "../components/SectionIntro.jsx";

const storeImage =
  "https://framerusercontent.com/images/xUFPKDxXEYQEV8DE80g3vuu6c.jpg?scale-down-to=1024&width=1600&height=1280";

export default function StoreLocator() {
  return (
    <section className="page-section store-section">
      <div className="content-width">
        <SectionIntro eyebrow="06 / A personal experience" title="Your next chapter starts here." />
        <div className="store-layout">
          <img src={storeImage} alt="Timepiece detail from the Alberto collection" loading="lazy" />
          <div className="store-card">
            <h2>Visit Alberto</h2>
            <p>
              Experience the collection in person. Our team will help you find a timepiece
              that feels unmistakably yours.
            </p>
            <dl className="store-details">
              <div><dt>Address</dt><dd>Store address to be confirmed</dd></div>
              <div><dt>Hours</dt><dd>Opening hours to be confirmed</dd></div>
              <div><dt>Telephone</dt><dd>Contact number to be added</dd></div>
            </dl>
            <button className="button button-muted" type="button" disabled>
              Get Directions
            </button>
            <p className="store-note">
              Directions will be available once our store address is confirmed.
            </p>
            <Link className="text-link" to="/contact">Contact the store</Link>
          </div>
        </div>
      </div>
    </section>
  );
}