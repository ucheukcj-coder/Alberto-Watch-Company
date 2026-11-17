import { Link } from "react-router-dom";
import FaqList from "../components/FaqList.jsx";
import SectionIntro from "../components/SectionIntro.jsx";

export default function Support() {
  return (
    <section className="page-section support-section">
      <div className="content-width">
        <SectionIntro
          eyebrow="07 / Here for your timepiece"
          title="Care that lasts beyond the purchase."
        />
        <FaqList />
        <div className="section-cta">
          <Link className="button button-gold" to="/contact">Customer Enquiry</Link>
        </div>
      </div>
    </section>
  );
}
