import { useEffect, useRef } from "react";
import formatPrice from "../utils/formatPrice.js";

export default function ProductModal({ product, onClose }) {
  const closeButton = useRef(null);

  useEffect(() => {
    if (!product) return undefined;

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    closeButton.current?.focus();
    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        aria-describedby="product-modal-description"
      >
        <button
          className="modal-close"
          ref={closeButton}
          type="button"
          onClick={onClose}
          aria-label="Close product details"
        >
          ×
        </button>
        <div className="modal-image">
          <img src={product.image} alt={product.alt} />
        </div>
        <div className="modal-content">
          <p className="eyebrow">{product.brand}</p>
          <h2 id="product-modal-title">{product.model}</h2>
          <p className="modal-price">{formatPrice(product.price)}</p>
          <p id="product-modal-description">{product.description}</p>
          <h3>Specifications</h3>
          <dl className="specification-list">
            {product.specifications.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <p className="modal-disclaimer">
            Sample catalogue details and prices are illustrative. Confirm the exact model and
            specifications with the store.
          </p>
        </div>
      </section>
    </div>
  );
}
