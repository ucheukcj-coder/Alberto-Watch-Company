import { Link } from "react-router-dom";
import SectionIntro from "../components/SectionIntro.jsx";

const storeImage =
  "https://framerusercontent.com/images/xUFPKDxXEYQEV8DE80g3vuu6c.jpg?scale-down-to=1024&width=1600&height=1280";

const mapImage =
  "https://framerusercontent.com/images/cBv7x8yT9kLqW2mN1pR3.jpg?scale-down-to=1024&width=1200&height=800";

const storeLocation = {
  name: "Alberto Watch Company - Manhattan",
  address: "789 Madison Avenue",
  city: "New York, NY 10022",
  phone: "+1 (212) 555-0187",
  email: "manhattan@albertowatch.com",
  hours: [
    { day: "Monday - Friday", time: "10:00 AM - 7:00 PM" },
    { day: "Saturday", time: "10:00 AM - 6:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  coordinates: { lat: 40.7580, lng: -73.9855 },
};

const storeFeatures = [
  {
    icon: "🕐",
    title: "Curated Collections",
    description: "Hand-selected luxury timepieces from the world’s most respected maisons, available for immediate viewing and purchase.",
  },
  {
    icon: "🔧",
    title: "On-Site Watchmaker",
    description: "Our certified watchmaker performs repairs, adjustments, and battery replacements while you wait.",
  },
  {
    icon: "💎",
    title: "Professional Appraisal",
    description: "GIA-trained specialists provide insurance and estate appraisals with certified documentation.",
  },
  {
    icon: "🎁",
    title: "Personal Styling",
    description: "Complimentary one-on-one consultations to find the perfect timepiece for your wrist and lifestyle.",
  },
  {
    icon: "🔒",
    title: "Secure Storage",
    description: "Climate-controlled vault storage for your collection with 24/7 monitoring and insurance options.",
  },
  {
    icon: "📚",
    title: "Heritage Archive",
    description: "Access to historical catalogs, service records, and provenance research for vintage pieces.",
  },
];

export default function StoreLocator() {
  return (
    <section className="page-section store-section">
      <div className="content-width">
        <SectionIntro eyebrow="06 / A personal experience" title="A closer look, in person." />

        {/* Map Section */}
        <div className="store-map-section">
          <div className="store-map">
            <img
              src={mapImage}
              alt="Map showing Alberto Watch Company location at 789 Madison Avenue, New York"
              loading="lazy"
            />
            <div className="map-overlay">
              <div className="map-marker" aria-label="Alberto Watch Company location"></div>
            </div>
          </div>
        </div>

        {/* Store Details & Features */}
        <div className="store-details-layout">
          <div className="store-info-card">
            <h2>{storeLocation.name}</h2>
            <address className="store-address">
              <p>{storeLocation.address}</p>
              <p>{storeLocation.city}</p>
              <p>
                <a href={`tel:${storeLocation.phone}`}>{storeLocation.phone}</a>
              </p>
              <p>
                <a href={`mailto:${storeLocation.email}`}>{storeLocation.email}</a>
              </p>
            </address>

            <div className="store-hours">
              <h3>Opening Hours</h3>
              <dl>
                {storeLocation.hours.map(({ day, time }) => (
                  <div key={day} className="hours-row">
                    <dt>{day}</dt>
                    <dd>{time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="store-actions">
              <Link className="button button-gold" to="/contact">Contact This Store</Link>
              <Link className="text-link" to="/collections">Browse Collection First</Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="store-features-section">
            <h3>Services at this location</h3>
            <div className="feature-grid store-feature-grid">
              {storeFeatures.map((feature, index) => (
                <article className="feature-card store-feature-card" key={index}>
                  <span className="feature-icon" aria-hidden="true">{feature.icon}</span>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Locations */}
        <div className="additional-locations">
          <h3>Other locations coming soon</h3>
          <p className="section-description">
            We’re expanding our presence. Sign up for updates on new showroom openings.
          </p>
          <Link className="button button-gold" to="/contact">Get Notified</Link>
        </div>
      </div>
    </section>
  );
}
