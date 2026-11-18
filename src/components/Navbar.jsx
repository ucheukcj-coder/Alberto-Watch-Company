
import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import useVisitorCount from "../hooks/useVisitorCount.js";
import { useCart } from "../context/CartContext.jsx";

const links = [
  ["/", "Home"],
  ["/collections", "Collections"],
  ["/technology", "Technology"],
  ["/about", "About Us"],
  ["/gallery", "Gallery"],
  ["/store-locator", "Store Locator"],
  ["/support", "Support"],
  ["/contact", "Contact"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, error } = useVisitorCount();
  const { cartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const visitLabel = error
    ? error
    : count === null
      ? "Loading local count"
      : `Your visits · ${count}`;

  return (
    <header className={`site-header${location.pathname === "/" ? " site-header-home" : ""}`}>
      <div className="header-inner">
        <Link className="wordmark" to="/" aria-label="Alberto Watch Company home">
          <span className="wordmark-name">ALBERTO</span>
          <span className="wordmark-subtitle">WATCH COMPANY</span>
        </Link>

        <span className="visitor-count" aria-live="polite">
          {visitLabel}
        </span>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`primary-navigation${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                isActive ? "nav-link is-active" : "nav-link"
              }
            >
              {label}
            </NavLink>
          ))}

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `nav-link cart-nav-link${isActive ? " is-active" : ""}`
            }
            aria-label={`Shopping bag, ${cartCount} items`}
          >
            <span aria-hidden="true">♧</span>
            Bag
            <span className="cart-count">{cartCount}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
