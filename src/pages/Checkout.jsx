import { Link, useSearchParams } from "react-router-dom";
import SectionIntro from "../components/SectionIntro.jsx";
import watches from "../data/watches.json";
import formatPrice from "../utils/formatPrice.js";

export default function Checkout() {
  const [searchParams] = useSearchParams();
  const product = watches.find((item) => item.id === searchParams.get("product"));

  return (
    <section className="page-section checkout-section">
      <div className="content-width">
        <SectionIntro eyebrow="Demo only" title="Checkout preview." />
        <div className="checkout-card">
          {product ? (
            <>
              <img src={product.image} alt={product.alt} />
              <div>
                <p className="eyebrow">{product.brand}</p>
                <h2>{product.model}</h2>
                <p>{formatPrice(product.price)}</p>
              </div>
            </>
          ) : (
            <p>Select a watch from the collection to see its checkout preview.</p>
          )}
        </div>
        <p className="checkout-notice">
          This is a demonstration only. No order is placed and no payment is processed.
        </p>
        <Link className="button button-gold" to="/collections">Return to Collections</Link>
      </div>
    </section>
  );
}
