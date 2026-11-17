import { Link } from "react-router-dom";
import InfoTicker from "./InfoTicker.jsx";

const exploreLinks = [
  ["/", "Home"],
  ["/collections", "Collections"],
  ["/technology", "Technology"],
  ["/about", "About Us"],
  ["/gallery", "Gallery"],
];

const collectionLinks = [
  ["/collections?category=luxury", "Luxury Watches"],
  ["/collections?category=vintage", "Vintage Watches"],
  ["/collections?category=smart", "Smart Watches"],
  ["/collections?category=classic", "Classic Watches"],
  ["/support", "Repairs & appraisals"],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main content-width">
        <div className="footer-brand">
          <Link className="wordmark" to="/" aria-label="Alberto Watch Company home">
            <span className="wordmark-name">ALBERTO</span>
            <span className="wordmark-subtitle">WATCH COMPANY</span>
          </Link>
          <p>Extraordinary timepieces. Personal service. A lasting relationship.</p>
        </div>

        <FooterLinkGroup title="Explore" links={exploreLinks} />
        <FooterLinkGroup title="Collections" links={collectionLinks} />

        <div className="footer-group">
          <h2 className="footer-heading">Get in touch</h2>
          <span className="footer-placeholder">Business email to be added</span>
          <span className="footer-placeholder">Contact number to be added</span>
          <Link className="footer-link" to="/contact">Contact us</Link>
        </div>
      </div>

      <div className="footer-bottom content-width">
        <p>© {new Date().getFullYear()} Alberto Watch Company. All rights reserved.</p>
        <Link className="footer-link" to="/sitemap">Sitemap</Link>
      </div>

      <InfoTicker />
    </footer>
  );
}

function FooterLinkGroup({ title, links }) {
  return (
    <div className="footer-group">
      <h2 className="footer-heading">{title}</h2>
      {links.map(([to, label]) => (
        <Link className="footer-link" key={`${to}-${label}`} to={to}>
          {label}
        </Link>
      ))}
    </div>
  );
}