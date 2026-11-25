import { useState } from "react"; // 1. Import hook
import { useCart } from "../context/CartContext.jsx";
import formatPrice from "../utils/formatPrice.js";

export default function ProductCard({ product, onViewDetails }) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false); // 2. Add state

  // 3. New handler function
  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    
    // Reset after 2 seconds
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <article className="product-card">
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
            className={`product-checkout-link ${isAdded ? 'is-added' : ''}`}
            type="button"
            onClick={handleAddToCart} 
            disabled={isAdded} // Prevent double clicking
          >
            {isAdded ? "✓ Added" : "Add to Cart"} 
          </button>
        </div>
      </div>
    </article>
  );
}