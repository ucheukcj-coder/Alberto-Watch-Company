import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import ProductModal from "../components/ProductModal.jsx";
import watches from "../data/watches.json";

const heroWatch = watches[0];
const sliderWatches = watches.slice(1, 5);
const brandNames = ["All brands", ...new Set(watches.map((watch) => watch.brand))];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const [activeBrand, setActiveBrand] = useState("All brands");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const activeWatch = sliderWatches[activeSlide];
  const featuredWatches = useMemo(
    () =>
      activeBrand === "All brands"
        ? watches.filter((_, index) => index % 2 === 0)
        : watches.filter((watch) => watch.brand === activeBrand),
    [activeBrand],
  );
  const closeProductModal = useCallback(() => setSelectedProduct(null), []);

  useEffect(() => {
    if (
      isHovered ||
      isManuallyPaused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % sliderWatches.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isHovered, isManuallyPaused]);

  function moveSlide(direction) {
    setActiveSlide(
      (current) => (current + direction + sliderWatches.length) % sliderWatches.length,
    );
  }

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">A lifetime of extraordinary moments</p>
          <h1>Timeless elegance. Exceptional craftsmanship.</h1>
          <p className="hero-description">
            Discover extraordinary timepieces curated for those who appreciate precision,
            heritage and timeless design.
          </p>
          <div className="hero-actions">
            <Link className="button button-gold" to="/collections">Explore Collections</Link>
            <Link className="text-link" to="/about">Discover Our Story</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroWatch.image} alt={heroWatch.alt} fetchPriority="high" />
        </div>
      </section>

      <section
        className="home-watch-slider"
        aria-label="Featured watches"
        aria-roledescription="carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="home-watch-slider-frame"
          role="group"
          aria-roledescription="slide"
          aria-label={`${activeSlide + 1} of ${sliderWatches.length}: ${activeWatch.brand} ${activeWatch.model}`}
        >
          <img
            key={activeWatch.id}
            src={activeWatch.image}
            alt={activeWatch.alt}
            loading="lazy"
          />
          <p className="home-watch-slider-caption">
            <span>{activeWatch.brand}</span>
            {activeWatch.model}
          </p>
          <button
            className="home-watch-slider-arrow is-previous"
            type="button"
            aria-label="Show previous watch"
            onClick={() => moveSlide(-1)}
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            className="home-watch-slider-arrow is-next"
            type="button"
            aria-label="Show next watch"
            onClick={() => moveSlide(1)}
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
        <div className="home-watch-slider-controls">
          <div className="home-watch-slider-dots" role="group" aria-label="Choose a watch">
            {sliderWatches.map((watch, index) => (
              <button
                className={`home-watch-slider-dot${activeSlide === index ? " is-active" : ""}`}
                key={watch.id}
                type="button"
                aria-label={`Show ${watch.brand} ${watch.model}`}
                aria-pressed={activeSlide === index}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
          <button
            className="home-watch-slider-pause"
            type="button"
            aria-label={isManuallyPaused ? "Resume automatic sliding" : "Pause automatic sliding"}
            aria-pressed={isManuallyPaused}
            onClick={() => setIsManuallyPaused((paused) => !paused)}
          >
            <span aria-hidden="true">{isManuallyPaused ? "▶" : "Ⅱ"}</span>
          </button>
        </div>
      </section>

      <section className="page-section home-store-section" aria-labelledby="home-store-title">
        <div className="content-width">
          <header className="section-intro">
            <p className="eyebrow">01 / In-store selection</p>
            <h2 className="section-title" id="home-store-title">A few pieces from our collection.</h2>
            <p className="section-description">
              Browse a small preview of our watch selection, then visit or contact our store
              to confirm current availability.
            </p>
          </header>
          <p className="catalogue-note">
            Sample catalogue · USD prices are illustrative · Confirm availability with the store
          </p>
          <div className="home-brand-filter">
            <span className="home-brand-filter-label">Choose a brand</span>
            <div className="home-brand-options" role="group" aria-label="Filter watches by brand">
              {brandNames.map((brand) => (
                <button
                  className={`home-brand-option${activeBrand === brand ? " is-active" : ""}`}
                  key={brand}
                  type="button"
                  aria-pressed={activeBrand === brand}
                  onClick={() => setActiveBrand(brand)}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>
          <p className="home-brand-status" aria-live="polite">
            {activeBrand === "All brands"
              ? `Showing a selection from ${brandNames.length - 1} brands`
              : `Showing ${activeBrand} watches`}
          </p>
          <div className="product-grid home-store-grid">
            {featuredWatches.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={setSelectedProduct}
              />
            ))}
          </div>
          <div className="home-store-actions">
            <Link className="button button-gold" to="/collections">Explore all watches</Link>
            <Link className="text-link" to="/store-locator">Visit our store</Link>
          </div>
        </div>
      </section>
      <ProductModal product={selectedProduct} onClose={closeProductModal} />
    </>
  );
}
