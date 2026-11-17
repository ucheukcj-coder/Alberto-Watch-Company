import { Link } from "react-router-dom";
import SectionIntro from "../components/SectionIntro.jsx";

const pages = [
  ["/", "Home"],
  ["/collections", "Collections"],
  ["/technology", "Technology"],
  ["/about", "About Us"],
  ["/gallery", "Gallery"],
  ["/store-locator", "Store Locator"],
  ["/support", "Support"],
  ["/contact", "Contact"],
];

export default function Sitemap() {
  return (
    <section className="page-section sitemap-section">
      <div className="content-width">
        <SectionIntro eyebrow="Alberto Watch Company" title="Sitemap" />
        <nav className="sitemap-links" aria-label="Sitemap">
          {pages.map(([to, label]) => (
            <Link key={to} to={to}>{label}</Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
