
import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

const links = [
  ["/collections", "Collections"],
  ["/technology", "Technology"],
  ["/about", "Our Story"],
  ["/gallery", "Gallery"],
  ["/store-locator", "Store Locator"],
  ["/support", "Support"],
  ["/contact", "Contact"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`site-header${location.pathname === "/" ? " site-header-home" : ""}`}>
      <div className="header-inner">
        <Link className="wordmark" to="/" aria-label="Alberto Watch Company home">
          <span className="wordmark-name">ALBERTO</span>
          <span className="wordmark-subtitle">WATCH COMPANY</span>
        </Link>

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
            <svg
              className="cart-nav-icon"
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M5 8h14l-1 13H6L5 8Z" />
              <path d="M9 9V6a3 3 0 0 1 6 0v3" />
            </svg>
            Bag
            <span className="cart-count">{cartCount}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
