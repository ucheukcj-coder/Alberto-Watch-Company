import { Link } from "react-router-dom";
import SectionIntro from "../components/SectionIntro.jsx";

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
};

const storeFeatures = [
  { icon: "🕐", title: "Curated Collections", description: "Hand-selected luxury timepieces..." },
  { icon: "🔧", title: "On-Site Watchmaker", description: "Our certified watchmaker performs..." },
  { icon: "💎", title: "Professional Appraisal", description: "GIA-trained specialists provide..." },
  { icon: "🎁", title: "Personal Styling", description: "Complimentary consultations..." },
  { icon: "🔒", title: "Secure Storage", description: "Climate-controlled vault storage..." },
  { icon: "📚", title: "Heritage Archive", description: "Access to historical catalogs..." },
];

export default function StoreLocator() {
  return (
    <section className="page-section store-section">
      <div className="content-width">
        <SectionIntro eyebrow="06 / A personal experience" title="A closer look, in person." />

        {/* Map Section */}
        <div className="store-map">
          <iframe
          style={{ width: '100%', height: '400px', border: 0 }}
            src="https://maps.google.com/maps?q=789%20Madison%20Avenue,%20New%20York&t=&z=15&ie=UTF8&iwloc=&output=embed"
            title="Alberto Watch Company store location"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="store-details-layout">
          <div className="store-info-card">
            <h2>{storeLocation.name}</h2>
            <address className="store-address">
              <p>{storeLocation.address}</p>
              <p>{storeLocation.city}</p>
              <p><a href={`tel:${storeLocation.phone}`}>{storeLocation.phone}</a></p>
              <p><a href={`mailto:${storeLocation.email}`}>{storeLocation.email}</a></p>
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
      </div>
    </section>
  );
}