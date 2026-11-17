import { Link } from "react-router-dom";

const heroImage =
  "https://framerusercontent.com/images/0tiTwcBk6TJu2RiAO5Z9f93RmU.jpg?scale-down-to=1024&width=1600&height=1067";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">A lifetime of extraordinary moments</p>
        <h1>Timeless elegance. Exceptional craftsmanship.</h1>
        <p className="hero-description">
          Discover extraordinary timepieces curated for those who appreciate precision,
          heritage and timeless design.
        </p>
        <div className="hero-actions">
          <Link className="button button-gold" to="/collections">Explore Collections</Link>
          <Link className="text-link" to="/about">Discover Our Story</Link>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Luxury watch photographed in dramatic light" fetchPriority="high" />
      </div>
    </section>
  );
}