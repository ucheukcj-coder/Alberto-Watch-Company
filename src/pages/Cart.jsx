
import { Link } from "react-router-dom";
import SectionIntro from "../components/SectionIntro.jsx";
import { useCart } from "../context/CartContext.jsx";
import formatPrice from "../utils/formatPrice.js";

export default function Cart() {
  const {
    cart,
    cartCount,
    subtotal,
    removeFromCart,
    updateQuantity,
  } = useCart();

  return (
    <section className="page-section cart-section">
      <div className="content-width">
        <SectionIntro
          eyebrow="Your selection"
          title="Your shopping bag."
        />

        {cart.length === 0 ? (
          <div className="cart-empty">
            <p>Your shopping bag is currently empty.</p>
            <Link className="button button-gold" to="/collections">
              Explore Collections
            </Link>
          </div>
        ) : (
          <>
            <p className="cart-item-count">
              {cartCount} item{cartCount === 1 ? "" : "s"} in your bag
            </p>

            <div className="cart-layout">
              <div className="cart-items">
                {cart.map((item) => (
                  <article className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.alt} />

                    <div className="cart-item-details">
                      <p className="product-brand">{item.brand}</p>
                      <h3>{item.model}</h3>
                      <p>{formatPrice(item.price)}</p>

                      <div className="cart-quantity">
                        <button
                          type="button"
                          aria-label={`Decrease quantity of ${item.model}`}
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          type="button"
                          aria-label={`Increase quantity of ${item.model}`}
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="cart-remove"
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>

                    <p className="cart-item-total">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </article>
                ))}
              </div>

              <aside className="cart-summary">
                <h2>Order summary</h2>

                <div className="cart-summary-line">
                  <span>Items</span>
                  <span>{cartCount}</span>
                </div>

                <div className="cart-summary-line">
                  <span>Subtotal</span>
                  <strong>{formatPrice(subtotal)}</strong>
                </div>

                <p className="cart-demo-note">
                  This is a demonstration catalogue. Final prices and availability
                  must be confirmed with the store.
                </p>

                <Link className="button button-gold cart-checkout-button" to="/checkout">
                  Continue to Checkout
                </Link>

                <Link className="cart-continue-link" to="/collections">
                  Continue shopping
                </Link>
              </aside>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
