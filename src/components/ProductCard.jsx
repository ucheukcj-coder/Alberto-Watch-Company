import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import formatPrice from "../utils/formatPrice.js";

export default function ProductCard({ product, onViewDetails }) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsFlipping(true);
    setTimeout(() => {
      setIsAdded(true);
      setIsFlipping(false);
    }, 300);
    setTimeout(() => {
      setIsAdded(false);
      setIsFlipping(false);
    }, 2000);
  };

  return (
    <article className={`product-card${isAdded ? ' added' : ''}${isFlipping ? ' flipping' : ''}`}>
      <div className="product-card-inner">
        <div className="product-card-front">
          <button
            className="product-image-button"
            type="button"
            onClick={() => onViewDetails(product)}
            aria-label={`View details for ${product.brand} ${product.model}`}
          >
            <img src={product.image} alt={product.alt} loading="lazy" />
          </button>

          <div className="product-card-content">
            <p className="product-brand">{product.brand}</p>
            <h3>{product.model}</h3>
            <p className="product-price">{formatPrice(product.price)}</p>

            <div className="product-actions">
              <button
                className="text-button"
                type="button"
                onClick={() => onViewDetails(product)}
              >
                View Details
              </button>

              <button
                className={`product-checkout-link${isAdded ? ' is-added' : ''}`}
                type="button"
                onClick={handleAddToCart}
                disabled={isAdded || isFlipping}
              >
                {isAdded ? "✓ Added" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
        <div className="product-card-back">
          <div className="product-card-back-content">
            <span className="checkmark">✓</span>
            <p>Added to Cart</p>
          </div>
        </div>
      </div>
    </article>
  );
}