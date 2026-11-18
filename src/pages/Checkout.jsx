
import { useState } from "react";
import { Link } from "react-router-dom";
import SectionIntro from "../components/SectionIntro.jsx";
import { useCart } from "../context/CartContext.jsx";
import formatPrice from "../utils/formatPrice.js";

export default function Checkout() {
  const { cart, subtotal, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setCustomer((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (cart.length === 0) return;

    clearCart();
    setOrderPlaced(true);
  }

  if (orderPlaced) {
    return (
      <section className="page-section checkout-section">
        <div className="content-width">
          <div className="checkout-success">
            <p className="eyebrow">Alberto Watch Company</p>
            <h1>Thank you, {customer.name}.</h1>
            <p>
              Your demonstration order has been completed successfully.
              No payment was taken and no real order was placed.
            </p>
            <Link className="button button-gold" to="/">
              Return Home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section checkout-section">
      <div className="content-width">
        <SectionIntro
          eyebrow="Almost yours"
          title="Complete your selection."
        />

        {cart.length === 0 ? (
          <div className="cart-empty">
            <p>Your shopping bag is empty. Add a watch before checking out.</p>
            <Link className="button button-gold" to="/collections">
              Explore Collections
            </Link>
          </div>
        ) : (
          <div className="checkout-layout">
            <form className="checkout-form" onSubmit={handleSubmit}>
              <h2>Customer information</h2>

              <label htmlFor="checkout-name">Full name</label>
              <input
                id="checkout-name"
                name="name"
                value={customer.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />

              <label htmlFor="checkout-email">Email address</label>
              <input
                id="checkout-email"
                name="email"
                type="email"
                value={customer.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="email"
                required
              />

              <label htmlFor="checkout-phone">Phone number</label>
              <input
                id="checkout-phone"
                name="phone"
                type="tel"
                value={customer.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                autoComplete="tel"
                required
              />

              <label htmlFor="checkout-address">Delivery address</label>
              <textarea
                id="checkout-address"
                name="address"
                value={customer.address}
                onChange={handleChange}
                placeholder="Enter your delivery address"
                autoComplete="street-address"
                rows="3"
                required
              />

              <p className="checkout-notice">
                Demonstration only. Do not enter payment card details.
                No payment will be processed.
              </p>

              <button className="button button-gold" type="submit">
                Complete Demo Order
              </button>
            </form>

            <aside className="checkout-summary">
              <h2>Your order</h2>

              {cart.map((item) => (
                <div className="checkout-summary-item" key={item.id}>
                  <img src={item.image} alt={item.alt} />

                  <div>
                    <p className="product-brand">{item.brand}</p>
                    <h3>{item.model}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <strong>
                      {formatPrice(item.price * item.quantity)}
                    </strong>
                  </div>
                </div>
              ))}

              <div className="cart-summary-line checkout-total">
                <span>Subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
